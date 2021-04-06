import React, { useState } from 'react'

import { getPosts } from '../api/api'
import HomeLoader from './HomeLoader'
import Post from './Post'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  const refresh = async () => {
    console.log(page)
    const newPosts = await getPosts(page)
    if (newPosts.length > 0) {
      setPosts([...posts, ...newPosts])
      setPage(page + 1)
    }
  }

  return (
    <div>
      <h1>Home</h1>
      {posts.map(post => <Post content={post.content} comments={post.comments} />)}
      <HomeLoader page={page} refresh={refresh} />
    </div>
  )
}

export default Home