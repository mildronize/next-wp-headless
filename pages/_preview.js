import React, { Component } from "react";
import Head from 'next/head'
import fetch from "isomorphic-unfetch";
import Config from "../config";
import QueryString from "query-string";
import PageLayout from "../components/layouts/PageLayout";

import Prism from "prismjs";
import { ArticleLoader } from "../components/Loaders";
import "prismjs/components/prism-python";

export default class PreviewPage extends Component {
  state = {
    post: {
      title: "",
      content: "",
      slug: ""
    },
    errorMsg: null,
    isLoading: true
  };

  async componentDidMount() {
    await this.loadData();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  async loadData() {
    const parsed = QueryString.parse(window.location.search);
    const { id } = parsed;
    try {
      const response = await fetch(`${Config.WPAPI.previewById}&id=${id}`);
      const data = await response.json();

      if ("message" in data) {
        this.setState({ errorMsg: data.message });
        console.log(data.message);
      } else if (data.id == null) {
        this.setState({ errorMsg: "The preview isn't available!" });
      } else {
        this.setState({
          post: data
        });
      }
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
    console.log(this.state.errorMsg);
  }

  render() {
    const { title, content, date, slug } = this.state.post;
    const { errorMsg, isLoading } = this.state;
    return (
      <PageLayout>
        <Head>
          <title>{`Preview: ${title}`}</title>
        </Head>
        <section>
          <center>
            <h3 className="preview-header">-- Preview Mode --</h3>
          </center>
          <div className="alert alert-secondary" role="alert">
            <strong>slug:</strong> {slug}
          </div>
        </section>
        {isLoading ? (
          <ArticleLoader />
        ) : (
          <article>
            <h1
              className="post-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="post-date">
              {/* {DateTime.fromSQL(date, { zone: Config.timezone }).toFormat(
                "MMMM d, yyyy"
              )} */}
            </p>
            {errorMsg != null ? (
              <blockquote>
                <p>{errorMsg}</p>
              </blockquote>
            ) : (
              <></>
            )}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
        )}
      </PageLayout>
    );
  }
}
