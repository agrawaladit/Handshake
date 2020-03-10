import React, { Component } from 'react'
import JobPost from './JobPost'
import JobNavbar from './JobNavbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import JobsView from '../student/Jobs'
import { Container,Row, Col } from "react-bootstrap";

export default class JobsCompany extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <Row>
                    <Col >
                    <JobNavbar className="pad-all"></JobNavbar>
                    <Route exact path="/" component={JobPost} />
                    </Col>
                    </Row>
                    <Row>
                    <Container>
                        <Route exact path="/jobsc" component={JobPost} />
                        <Route exact path="/view" component={JobsView} />
                        </Container>
                    </Row>
                </Container>
            </Router>
        )
    }
}
