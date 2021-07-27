import React, {useState, useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Form } from "react-bootstrap";


function Modal1(props) {
  const [text, setText] = useState("")
  const handleInputChange = event => {
    setText(event.target.value);
  };
  
  useEffect(() => {
    console.log(text)

   }, [text])


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
              <Form>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  onChange={handleInputChange}
                />
              </Form>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=> props.handleCommentSubmit(props.id1, text)} variant="primary" type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal1;