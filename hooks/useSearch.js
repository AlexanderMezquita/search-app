import { useState } from "react"

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const updateSearch = (value) => {
    if (value.startsWith(' ')) return
    setSearch(value)

    if (value === '') {
      setError('The input cannot be empy')
      return
    }

    if (value.length < 3) {
      setError("The search requires minimun 3 characters")
      return
    }

    if (value.length > 25) {
      setError("The search is too long")
      return
    }
    setError(null)
  }

  return { error, search, updateSearch }
}
