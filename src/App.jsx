import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from '../components/movies'


function App() {
  return (
    <div className="page">
      <header>
        <h1>Movie Searcher</h1>
        <form className='form'>
          <input name='search' placeholder='Avengers, Matrix, Toy Story...' />
          <button type='submit'>Submit</button>
        </form>
      </header>
      <main>
        <Movies />
      </main>
    </div>
  )
}

export default App
