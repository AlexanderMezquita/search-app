
import results from '../src/mock/results.json'


function MoviesList({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(item => (
        <li className='movie' key={item.imdbID}>
          <h4>{item.Title}</h4>
          <p>{item.Year}</p>
          <img src={item.Poster} alt={item.Title} />
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return <p>Movie not found!</p>
}

export default function Movies() {
  const movies = results.Search;
  const hasMovies = movies?.length > 0;
  return (
    hasMovies ? <MoviesList movies={movies} /> : <NoMovies />
  )
}