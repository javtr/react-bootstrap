import { Button, Card, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function Content() {
  return (
    <div>
      <Container className="custom-container" fluid="md">
        <Card>
          <Card.Body>
            <Card.Title className="custom-container__tit1">Card Title</Card.Title>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3 custom-container__label border rounded-1"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" className=" border rounded-1" />
            </FloatingLabel>

          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
