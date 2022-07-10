import { useState, useEffect} from 'react'

const BASE_URL = 'https://api.github.com'

export const useGetRepos = (user = 'github') => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const res = await fetch(`${BASE_URL}/${user}/repos`)
    const data = await res.json()
    setRepos(data)
  })

  return repos
}