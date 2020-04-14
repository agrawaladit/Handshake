import React, { Component } from 'react'
import EventPost from './EventPost'
import EventNavbar from './EventNavbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EventsView from './EventsView'
import { Container, Row, Col } from "react-bootstrap";
import Profile from '../student/Profile'

export default class EventsCompany extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <EventNavbar className="pad-all"></EventNavbar>
                    <Route exact path="/" component={EventPost} />
                    <Row>
                        <Container>
                            <Route exact path="/eventsc" component={EventPost} />
                            <Route exact path="/events" component={EventsView} />
                            <Route exact path="/profiles" component={Profile} />
                        </Container>
                    </Row>
                </Container>
            </Router>
        )
    }
}
