import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Config from '../config';
import Link from 'next/link';
import PostList from '../components/PostList';
import PageLayout from '../components/layouts/PageLayout';

class Home extends Component {
  static async getInitialProps() {
    // fetch list of posts
    const response = await fetch(
      `${Config.WPAPI.allPostsById}&per_page=${Config.per_page}`
    )
    const postList = await response.json()
    // console.log(postList);
    return { postList }
  }

  render() {
    return (
      <PageLayout>
      <main>

        <center className="hero-section">
          <div className="hero-tagline">I'm Lecturer</div>
          <div className="hero-title">Thada Wangthammang</div>
          <p>Welcome to my personal archive. You can find almost stuff about me - blog posts, resume, projects, contact information, and more.</p>
        </center>

        <hr />

        <div className="page-section-header">Latest Posts</div>
        <PostList posts={this.props.postList} />
        <center><a href="/blog/">All blog posts</a></center>

      </main>
      </PageLayout>
    )
  }
}

export default Home