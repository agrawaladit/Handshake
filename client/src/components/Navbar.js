import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Handshake from '../hslogo.png'
import jwt_decode from 'jwt-decode'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Landing extends Component {
  logOut = e => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <Nav className="mr-auto" >
        <Nav>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </Nav>
        <Nav>
          <Link to="/register" className="nav-link">
            Student Register
          </Link>
        </Nav>
        <Nav>
          <Link to="/registerc" className="nav-link">
            Company Register
          </Link>
        </Nav>
      </Nav>
    )

    const companyLink = (
      <Nav>
        <Nav>
          <Link to="/jobsc" className="nav-link">
            Post Jobs
          </Link>
        </Nav>
        <Nav>
          <Link to="/eventsc" className="nav-link">
            Post Events
          </Link>
        </Nav>
        <Link to="/students" className="nav-link">
          Students
          </Link>
        <Nav>
          <Link to="/profilec" className="nav-link">
            Profile
          </Link>
        </Nav>
        <Nav>
          <Link to="" onClick={this.logOut} className="nav-link">
            Logout
          </Link>
        </Nav>
      </Nav>
    )

    const userLink = (
      <Nav>
        <Nav>
          <Link to={`/messages/${'Rachel'}`} className="nav-link">
            Messeges
          </Link>
        </Nav>
        <Nav>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </Nav>
        <Nav>
          <Link to="/events" className="nav-link">
            Events
          </Link>
        </Nav>
        <Nav>
          <Link to="/applications" className="nav-link">
            Applications
          </Link>
        </Nav>
        <Link to="/students" className="nav-link">
          Students
          </Link>
        <Nav>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </Nav>
        <Nav>
          <Link to="" onClick={this.logOut} className="nav-link">
            Logout
          </Link>
        </Nav>
      </Nav>
    )

    try {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      if (decoded.school) {
        var linkSwitch = userLink
      }
      if (decoded.company) {
        var linkSwitch = companyLink
      }
    }
    catch (err) {
      console.log("Login Mode");
    }


    return (
      <Navbar bg="primary" variant="dark" className="d-flex p-2 bd-highlight" >
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
        <Form inline style={{ width: '45%' }}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        {localStorage.usertoken ? linkSwitch : loginRegLink}
      </Navbar>
    )
  }
}

export default withRouter(Landing)
