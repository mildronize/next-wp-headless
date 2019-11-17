import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Config from '../../config';
import PageLayout from '../../components/layouts/PageLayout';
import { parseISO, format } from 'date-fns';
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
    const { title, content, date } = this.props.post

    return (
      <PageLayout>
      <main>
       
        <Head>
          <title>{title.rendered}</title>
        </Head>
        <article>
        <h1
          dangerouslySetInnerHTML={{ __html:  title.rendered }}
        />
         <p class="post-date">
            { format(parseISO(date), "MMMM d, yyyy") }
          </p>
        <div
          dangerouslySetInnerHTML={{ __html:  content.rendered }}
        />
         </article>
         
        <section>
        <div className="post-offset-bottom" />
        <center>   
          <Link href='/'>
            <a><i class="fas fa-arrow-left mr-3"></i> GO BACK TO HOME</a>
          </Link>
        </center>
        <div className="post-offset-bottom" />
        </section>
       
      </main>
      </PageLayout>
    )
  }
}
