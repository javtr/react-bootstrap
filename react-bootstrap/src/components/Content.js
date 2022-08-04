import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function Content() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);

    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
      })
  }, []);


  return (
    <div>
      <Container className="custom-container" fluid="md">
        <Card>
          <Card.Body>
            <Card.Title className="custom-container__tit1">
              Add Student
            </Card.Title>
            <FloatingLabel
              controlId="nameInput"
              label="Student Name"
              className="mb-3 custom-container__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <Form.Control placeholder="Leave a comment here" />
            </FloatingLabel>
            <FloatingLabel
              controlId="idInput"
              label="Student ID"
              className="mb-3 custom-container__input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            >
              <Form.Control placeholder="Leave a comment here" />
            </FloatingLabel>
            <Button variant="success" onClick={handleClick}>
              Submit
            </Button>{" "}
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title className="custom-container__tit1">Students</Card.Title>

            {students.map((student) => (
              <Card className="custom-container__cardStudent" key={student.id}>
                Id:{student.id}
                <br />
                Name:{student.name}
                <br />
                Address:{student.address}
              </Card>
            ))}

          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
