
import { useMovies } from "../hooks/useMovies";
import { useSearch } from "../hooks/useSearch";

function MoviesList({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(item => (
        <li className='movie' key={item.imdbID}>
          <img src={item.Poster} alt={item.Title} />
          <h5>{item.Title}</h5>
          <p>{item.Year}</p>
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
  return hasMovies ? <>
    <MoviesList movies={movies} /></> : <NoMovies />

}