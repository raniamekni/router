import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, movieName, rating }) => {
  const [filtredMovies, setFiltredmovie] = useState(movies);

  console.log(rating)
  useEffect(() => {
    if (movieName.length !== 0 || rating !== 0) {
      setFiltredmovie(
        movies.filter((movie) => {
          return (
            movie.rating >= rating &&
            movie.name.toLowerCase().includes(movieName.toLowerCase())
          );
        })
      );
    } else {
      setFiltredmovie(movies);
    }
  }, [movies, movieName, rating]);

  return (
    <div>
      <MovieCard filtredMovies={filtredMovies} />
    </div>
  );
};

export default MovieList;