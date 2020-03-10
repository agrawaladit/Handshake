import React, { Component } from 'react'
import JobPost from './JobPost'
import JobNavbar from './JobNavbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import JobsView from '../student/Jobs'
import { Container } from "react-bootstrap";

export default class JobsCompany extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <JobNavbar className="pad-all"></JobNavbar>
                    <Route exact path="/" component={JobPost} />
                    <Container>
                        <Route exact path="/jobsc" component={JobPost} />
                        <Route exact path="/view" component={JobsView} />
                    </Container>
                </Container>
            </Router>
        )
    }
}
