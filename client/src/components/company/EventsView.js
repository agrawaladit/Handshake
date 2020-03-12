import React, { Component } from 'react'
import { getEvents } from '../UserFunctions'
import jwt_decode from 'jwt-decode'
import { Card, Col, Tab, Row, Nav,Container } from 'react-bootstrap'
import handshake from '../../handshake.png'
import EventsRightCompany from './EventsRightCompany'

export default class Jobs extends Component {

    state = {
        events: [],
        student_id: '',
        student_name: '',
        company: '',
        search_company: '',
        search_title: '',
        search_location: '',
        search_category: '',
        mode: true
    }

    updateSearch = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        getEvents().then(response => {
            if (response) {
                this.setState({
                    events: response
                })
            }
        })
            .catch(error => {
                console.log(error)
            })

        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            company: decoded.id
        })
    }


    render() {
        try {
            const events = this.state.events.filter(
                event => {
                    return (event.company_id === this.state.company)
                }
            )
            
            var eventsLeftValues = events.map(event => {
                return (
                    <Nav.Item>
                        <Nav.Link eventKey={event.id}>
                            <Container className="pad-all">
                                <Row>
                                    <Col xs={3}>
                                        <Card.Img variant="top" src={handshake} />
                                    </Col>
                                    <Col xs={9}>
                                        <Card.Title>{event.name}</Card.Title>
                                        <Card.Subtitle className="mb-2">{[event.company.company+" - "+event.location]}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Eligibility: {event.eligibility}</Card.Subtitle>
                                    </Col>
                                </Row>
                            </Container>
                        </Nav.Link>
                    </Nav.Item>
                )
            })
        }
        catch (err) {
            console.log("Data loading");
        }


        try {
            var eventsRightValues = this.state.events.map(event => {
                return (
                    <Tab.Pane eventKey={event.id}>
                        <EventsRightCompany event={event.id} />
                    </Tab.Pane>
                )
            })
        }
        catch (err) {
            console.log("Data loading");
        }

        return (
            <div>
                <div class="card border">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={4}>
                                <Nav variant="pills" className="flex-column">
                                    {eventsLeftValues}
                                </Nav>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    {eventsRightValues}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        )
    }
}
