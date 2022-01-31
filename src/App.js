import { useState } from "react";
import "./App.css";

import MainNavbar from "./Components/MainNavbar";
import MovieList from "./Components/MovieList";


function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      img: "https://fr.web.img2.acsta.net/newsv7/20/04/22/10/01/2442322.jpg",
      name: "venom",
      description:"Action",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3df14609f39e485a1775905751662d8ec2d00f2cb5b018e1680b664220e06ac7._RI_V_TTW_.jpg",
      name: "Mr & Mrs smith",
      description:"Action",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-p3Iai7c9sLOtyRW_98adl-NQ5dy8rqDjbg&usqp=CAU",
      name: "titanic",
      description:"drame romantique",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/I/81QmDT99wsL._SL1500_.jpg",
      name: "Red notice ",
      description:"Action",
      rating: 4,
    },
    
    {
      id: Math.random(),
      img:"https://www.cambodgepost.com/wp-content/uploads/2021/06/la-casa-de-papel-saison-5-volume-1-date-de-sortie.jpg",
      name: "la casa de papel",
      description:"Drame, Thriller, Braquage",
      rating: 4,
    },
  ]);
  const [movieName, setmovieName] = useState("");
  const [rating, setRating] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [NewMovie, setNewMovie] = useState({
    id: Math.random(),
    img: "",
    name: "",
    description: "",
    rating: 0,
  });
  const handleSearch = (e) => {
    setmovieName(e.target.value);
  };
  const handleRating = (newRating) => {
    setRating(newRating);
  };
  const handleModal = () => {
    if (NewMovie.name.length !== 0 && NewMovie.img.length !== 0) {
      setMovies([...movies, NewMovie]);
      setToggle(!toggle);
    } else {
      setToggle(!toggle);
    }
  };
  // const handleAddMovie = (e) => {
  //   setNewMovie({ ...NewMovie, [e.target.name]: e.target.value });
  // };

  return (
    <div className="App">
      <MainNavbar
        movieName={movieName}
        handelSearch={handleSearch}
        rating={rating}
        handleRating={handleRating}
        handelModal={handleModal}
      />
      <MovieList movies={movies} movieName={movieName} rating={rating} />
      
    </div>
  );
}

export default App;
