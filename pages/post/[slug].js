import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Config from '../../config';
import PageLayout from '../../components/layouts/PageLayout';
import Prism from 'prismjs';
import "prismjs/components/prism-python";

export default class extends Component {
  static async getInitialProps ({ query }) {
    // fetch single post detail
    const response = await fetch(
      `${Config.WPAPI.allPostsById}&slug=${query.slug}`
    )
    const post = await response.json();
    const data = post[0];
    return { post: data }
  }

  componentDidMount(){
    Prism.highlightAll();
  }

  render () {
    const { title, content } = this.props.post




    return (
      <PageLayout>
      <main>
        <Head>
          <title>{title.rendered}</title>
        </Head>
        <h1
          dangerouslySetInnerHTML={{ __html:  title.rendered }}
        />
        <div
          dangerouslySetInnerHTML={{ __html:  content.rendered }}
        />
        <Link href='/'>
          <a>Go back to home</a>
        </Link>
      </main>
      </PageLayout>
    )
  }
}
