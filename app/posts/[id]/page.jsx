import React from 'react'

async function getPost(id) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    return await res.json();
  } catch (err) {
    console.log(err)
  }
}

const page = async ({ params }) => {
  const post = await getPost(params.id)
  console.log(post)
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className='tags'>
        {post.tags.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </>
  )
}

export default page