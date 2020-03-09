import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Handshake from '../hslogo.png'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <Nav className="mr-auto w-auto">
        <Nav>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </Nav>
        <Nav>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </Nav>
      </Nav>
    )

    const userLink = (
      <Nav>
        <Nav>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </Nav>
        <Nav>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </Nav>
        <Nav>
          <Link to="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </Link>
        </Nav>
      </Nav>
    )

    return (
      <Navbar bg="primary" variant="dark" className="d-flex p-2 bd-highlight">
        <Navbar>
          <Navbar.Brand href="/">
            <img
              src={Handshake}
              width="200"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        {localStorage.usertoken ? userLink : loginRegLink}
      </Navbar>
    )
  }
}

export default withRouter(Landing)
