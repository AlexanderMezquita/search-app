import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './components/movies'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'

function App() {
  const { error, search, updateSearch, page, updatePage } = useSearch()
  const { getMovies, movies, loading } = useMovies({ search, page });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (error) return

    getMovies({ search, page });
    // updatePage(1)

  }
  const handleChange = (value) => {
    updateSearch(value);
  }

  const handlePage = (page) => {
    if (error) return
    const newPage = page + 1
    updatePage(newPage)
    getMovies({ search, page: newPage })
  }

  // useEffect(() => {
  //   console.log('getmovies render')
  // }, [getMovies])

  return (
    <div className="page">
      <header>
        <h1>Movie App</h1>
        <a className='meIcon' href='https://www.alefolio.com' target='_blank'>
          <img src='/meIcon.png' alt='' />
        </a>
      </header>
      <main>
        <form className='form' onSubmit={handleSubmit}>
          <input name='search' autoComplete='off' onChange={(e) => handleChange(e.target.value)} value={search} placeholder='Avengers, Matrix, Toy Story...' style={{ border: '1px solid transparent', borderColor: error ? "red" : "transparent" }} />
          <button type='submit'>Submit</button>
        </form>
        <p className='error'>{error ? error : ""}</p>
        <div className='pageButton'>
          <button onClick={() => handlePage(page)} disabled={!movies?.length > 0}>{page}+</button>
        </div>
        {loading ? <p style={{ textAlign: "center" }}>Loading...</p> :
          <>
            <Movies movies={movies} />
          </>
        }
      </main>
    </div>
  )
}

export default App
