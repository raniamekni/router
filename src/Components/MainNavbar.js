import { Navbar, Container, Nav, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function MainNavbar({ movieName, handelSearch, rating , handleRating ,handelModal}) {
  return (
    <div>
      <Navbar bg="black" variant="white">
        <img
          src="https://thumbs.dreamstime.com/b/movie-illustration-logo-vector-design-film-178252125.jpg"
          height="40px"
          width={40}
          style={{ marginLeft: "50px" }}
        />
        <Container>
          
          <Nav className="me-auto">
         
           
            
            <div style={{display:"flex",marginLeft:"70px"}}>
            <ReactStars
            count={5}
            size={22}
            onChange={handleRating }
            value={rating}
            isHalf={false}
            edit={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"/></div>

            <Button style={{marginLeft:"100px"}} onClick={handelModal}>Add Movie</Button>
            <input
              placeholder="movie"
              style={{ width: "500px", marginLeft: "100px" }}
              value={movieName}
              onChange={handelSearch}
            />



          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNavbar;