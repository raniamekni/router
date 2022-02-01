import ReactStars from "react-rating-stars-component";
import {BrowserRouter as Router, Link} from "react-router-dom";




const MovieCard = ({ filtredMovies }) => {
  console.log(filtredMovies)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "60px",
      }}
    >
      {filtredMovies.map((movie) => {
        return (
          <div
            key={movie.id}
          >
            <Link to={`/about/${movie.id}`}>
            <img src={movie.img} width={200} height={250} />
            <h6> {movie.name} </h6>
            <p style={{fontSize:"12px"}}>{movie.description}</p>
            </Link>
          
            <ReactStars
              count={5}
              size={30}
              value={movie.rating}
              edit={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
        
            </div>
          
        );
      })}
      </div>
  );
};

         
export default MovieCard;