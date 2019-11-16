import React from 'react'
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

export default function PostList({ posts }){
    return (
      <div className="postlist">
      {posts.map(post => (
        <div className="row postlist-item" key={post.slug}>
          <div className="col-sm postlist-first-column">
            <time className="postlist-date">
              { format(parseISO(post.date), "yyyy MMM, d") }
              </time>
          </div>
          <div className="col-sm"> 
            <Link  href='/post/[slug]' as={`/post/${post.slug}`}>
              <a className="postlist-link"><span  dangerouslySetInnerHTML={{ __html:  post.title.rendered }} /></a>
              </Link>
          </div>
        </div>
        ))}
    
    </div>
    )
}