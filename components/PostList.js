import React from 'react'
import Link from 'next/link';
import { DateTime } from 'luxon';

export default function PostList({ posts }){
    return (
      <div className="postlist">
      {posts.map(post => (
        <div className="row postlist-item" key={post.slug}>
          <div className="col-sm postlist-first-column">
            <time className="postlist-date" dateTime="">{
              DateTime.fromISO(post.date).toFormat('yyyy MMM, d')
              }</time>
          </div>
          <div className="col-sm"> 
            <Link href='/post/[slug]' as={`/post/${post.slug}`}>
              <a>{post.title.rendered}</a>
              </Link>
          </div>
        </div>
        ))}
    
    </div>
    )
}