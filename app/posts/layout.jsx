// 'use client'

import Link from "next/link";
import React from "react";


async function getPosts() {
  try {
    const res = await fetch('https://dummyjson.com/posts?limit=5')
    return await res.json();
  } catch (err) {
    console.log(err)
  }
}

const Layout = async ({ children }) => {
  const posts = await getPosts()
  return (
    <div className="post-page">
      <h2 className="title">Posts Page</h2>
      <div className="post-container">
        <div className="posts">
          {posts?.posts.map(post => <div key={post.id}>
            <Link href={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
            <p>{post.body}</p>
          </div>)}
        </div>
        <div className="post-view">
          <h2 className="title">Post Detail</h2>
          <div className="view-container">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout