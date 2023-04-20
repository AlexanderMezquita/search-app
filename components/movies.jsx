
import { useMovies } from "../hooks/useMovies";

function MoviesList({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(item => (
        <li className='movie' key={item.imdbID}>
          <h5>{item.Title}</h5>
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

export default function Movies({ movies }) {

  const hasMovies = movies?.length > 0;
  return hasMovies ? <MoviesList movies={movies} /> : <NoMovies />

}