import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from '../components/movies'
import { useSearch } from '../hooks/useSearch'
import { useMovies } from '../hooks/useMovies'

function App() {
  const { error, search, updateSearch } = useSearch()
  const [page, setPage] = useState(1)
  const { getMovies, movies, loading } = useMovies({ search, page });

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search, page });
  }
  const handleChange = (value) => {
    updateSearch(value);
  }

  const handlePage = () => {
    setPage(page + 1)
    getMovies({ search, page })
  }

  // useEffect(() => {
  //   console.log('getmovies render')
  // }, [getMovies])

  return (
    <div className="page">
      <header>
        <h1>Movie Searcher</h1>
        <p className='error'>{error ? error : ""}</p>
        <button onClick={() => handlePage()}>page+</button>
        <form className='form' onSubmit={handleSubmit}>
          <input name='search' autoComplete='off' onChange={(e) => handleChange(e.target.value)} value={search} placeholder='Avengers, Matrix, Toy Story...' style={{ border: '1px solid transparent', borderColor: error ? "red" : "transparent" }} />
          <button type='submit'>Submit</button>
        </form>

      </header>
      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
