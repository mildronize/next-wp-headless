// Don't use this file, need JWT Auth for Wordpress
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import PageLayout from '../layouts/PageLayout';
import Config from '../../config';
import QueryString from 'query-string';

class Preview extends Component {
  constructor() {
    super();
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    // const { url } = this.props;
    // const { id, rev, type, status, wpnonce } = url.query;
    // console.log(this.props.query);
    const parsed = QueryString.parse(window.location.search);
    console.log(parsed);
    const { id, rev, type, status, wpnonce } = parsed;
    // http://localhost:3000/_preview?type=page&id=87&rev=0&wpnonce=6faf11d34e&status=draft
    // The REST posts controller handles both posts/#/revisions/# and pages/#/revisions/#
    // but the latter isn't documented.

    // checking if the post/page is a draft or a revision.
    let postUrl = `${Config.apiUrl}/wp/v2/${type}s/${id}/revisions/${rev}?_wpnonce=${wpnonce}`;
    if( status === 'draft' ) {
      postUrl = `${Config.apiUrl}/wp/v2/${type}s/${rev}?_wpnonce=${wpnonce}`;
    }
    console.log(postUrl);
    fetch(
      postUrl,
      { credentials: 'include' }, // required for cookie nonce auth
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          post: res,
        });
      });
  }

  render() {
    const { post } = this.state;
    const { data } = post || {};

    if (data && data.status && data.status >= 400) {
      return <Error statusCode={data.status} />;
    }

    return (
      <PageLayout>
        <h1>{post ? post.title.rendered : ''}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: post ? post.content.rendered : '',
          }}
        />
      </PageLayout>
    );
  }
}

export default Preview;
