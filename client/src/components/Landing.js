import React, { Component } from 'react'
import { Container } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <Container style={{
        backgroundColor: 'blue',
      }}>
        <div class="col-xs-6">
          <h1 style= {{color: "white"}}> Get the Job done. </h1>
          <br />
          <br />
          <h3 style= {{color: "white"}}> Students </h3>
          <h5 style= {{color: "white"}}> Launch the next step in your career. </h5>
          <br />
          <h3 style= {{color: "white"}}> Employers </h3>
          <h5 style= {{color: "white"}}> Hire the next generation of talent. </h5>
          <br />
          <br />
          
        </div>
      </Container>
    )
  }
}

export default Landing
