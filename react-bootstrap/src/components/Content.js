import { Button, Card, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from 'react';

export default function Content() {

  const[name,setName]=useState('')
  const[address,setAddress]=useState('')


  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)
 
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New Student added")
  })


}


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
              onChange={(e)=>setName(e.target.value)}
            >
              <Form.Control  placeholder="Leave a comment here" />
            </FloatingLabel>

            <FloatingLabel
              controlId="idInput"
              label="Student ID"
              className="mb-3 custom-container__input"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}

            >
              <Form.Control  placeholder="Leave a comment here" />
            </FloatingLabel>


            <Button variant="success" onClick={handleClick}>Submit</Button>{' '}            


          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
