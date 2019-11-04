import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Config from '../../config';
import PageLayout from '../../components/layouts/PageLayout';

export default class extends Component {
  static async getInitialProps ({ query }) {
    // fetch single post detail
    const response = await fetch(
      `${Config.WPAPI.allPagesBySlug}/${query.slug}`
    )
    const page  = await response.json()
    return { ...page }
  }

  render () {
    const { title, content } = this.props

    return (
      <PageLayout>
      <main>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html:  content }}
        />
        <Link href='/'>
          <a>Go back to home</a>
        </Link>
      </main>
      </PageLayout>
    )
  }
}
