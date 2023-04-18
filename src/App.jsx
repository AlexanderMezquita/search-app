import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="page">
      <header>
      <h1>Hello</h1>
        <form className='form'>
          <input name='search' placeholder='Avengers, Matrix, Toy Story...' />
          <button type='submit'>Submit</button>
        </form>
      </header>

      <main>
  <p>Aqui va el content</p>

      </main>
    </div>
  )
}

export default App
