import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const MovieDescription = ({ movies }) => {
    const { id } = useParams();
    const [movieDescription, setMovieDescription] = useState({});
console.log(id)
  useEffect(() => {
    setMovieDescription(movies.find((movie) => movie.id == id));
  }, [id]);
  console.log(movieDescription);
  return (
    <div>
      <h1>{movieDescription.name}</h1>
      <img src={movieDescription.img} alt={movieDescription.name} width={500} height={500}/>
      <h5>{movieDescription.description}</h5>
      <ReactPlayer url={movieDescription.trailer} style={{marginLeft:"450px"}}/>
    </div>
  );
};

export default MovieDescription;