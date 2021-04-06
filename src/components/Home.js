import React, { useState } from 'react'

import { getPosts } from '../api/api'
import HomeLoader from './HomeLoader'
import Post from './Post'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loadedAll, setLoadedAll] = useState(false)

  const refresh = async () => {
    if (loadedAll) return

    const newPosts = await getPosts(page)
    if (newPosts.length > 0) {
      setPosts([...posts, ...newPosts])
      setPage(page + 1)
    } else {
      setLoadedAll(true)
    }
  }

  return (
    <div>
      <h1 className="title">Home</h1>
      {posts.map(post => <Post content={post.content} comments={post.comments} />)}
      {loadedAll ? null : <HomeLoader page={page} refresh={refresh} />}
    </div>
  )
}

export default Home