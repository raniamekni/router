import { Modal, Button } from "react-bootstrap";
const AddMovie = ({ toggle, handelModal, NewMovie, handleAddMovie }) => {
  return (
    <div>
      <Modal
        show={toggle}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Movie Details</h4>
          <input
            type="text"
            placeholder="Add movie name"
            value={NewMovie.name}
            name="name"
            onChange={handleAddMovie}
          />
          <input
            type="text"
            placeholder="Add movie image"
            value={NewMovie.img}
            name="img"
            onChange={handleAddMovie}
          />
          <input
            type="text"
            placeholder="Add movie description"
            value={NewMovie.description}
            name="description"
            onChange={handleAddMovie}
          />
          <input
            type="number"
            placeholder="Add movie rating"
            value={NewMovie.rating}
            name="rating"
            onChange={handleAddMovie}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handelModal}>Add Movie</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;