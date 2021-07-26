import "./style.css";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="align-items-center">
            <Col xs="auto" className="my-1">
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
  
function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
  
render(<App />);


export default MyVerticallyCenteredModal;