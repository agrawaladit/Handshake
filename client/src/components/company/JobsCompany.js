import React, { Component } from 'react'
import JobPost from './JobPost'
import JobNavbar from './JobNavbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import JobsView from '../Jobs'
import { Container, Row, Col } from "react-bootstrap";
import Profile from '../student/Profile'

export default class JobsCompany extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <JobNavbar className="pad-all"></JobNavbar>
                    <Route exact path="/" component={JobPost} />
                    <Row>
                        <Container>
                            <Route exact path="/jobsc" component={JobPost} />
                            <Route exact path="/jobs" component={JobsView} />
                            <Route exact path="/profiles" component={Profile} />
                        </Container>
                    </Row>
                </Container>
            </Router>
        )
    }
}
