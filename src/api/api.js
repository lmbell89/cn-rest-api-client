const BASE_URL = 'http://localhost:5000'

export const getPosts = async (page) => {
  const response = await fetch(`${BASE_URL}/posts?page=${page}`)
  return response.json()
}