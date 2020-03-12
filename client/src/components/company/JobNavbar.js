import React, { Component } from 'react'
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

class JobNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="m-auto">
                <Navbar.Brand href="">Job Posting</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="m-auto">
                    <Nav className="ml-auto">
                        <Link to="/jobsc" className="nav-link">
                            Post
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to="/jobs" className="nav-link">
                            View
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default module = withRouter(JobNavbar)
