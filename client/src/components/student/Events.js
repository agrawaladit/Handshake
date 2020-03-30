import React, { Component } from 'react'
import { Accordion, Card, Button, Row, Col, Container } from "react-bootstrap";
import { setRegistrations, getEvents, getEducation } from '../UserFunctions'
import handshake from '../../handshake.png'
import jwt_decode from 'jwt-decode'

class Events extends Component {

    state = {
        events: '',
        search_event: '',
        major: '',
        student_id: '',
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            student_id: decoded.id
        })
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
        
        getEducation(decoded.id).then(response => {
            if (response) {
                this.setState({
                    major: response.major
                })
            }
        })
            .catch(error => {
                console.log(error)
                console.log("s")
            })
    }

    updateSearch = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    enroll = e => {
        const tempState = {
            student_id: this.state.student_id,
            event_id: e.target.value,
        }
        setRegistrations(tempState).then(
            console.log('Registered')
        )
    }

    render() {
        try {
            const eventss = this.state.events.filter((event) => {
                return ((event.name.toLowerCase().indexOf(this.state.search_event.toLowerCase()) !== -1) &&
                (this.state.major.toLowerCase().toLowerCase().indexOf(event.eligibility.toLowerCase()) !== -1))
            })


            var events = eventss.map(event => {
                return (
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={event.id}>
                            <Container className="pad-all">
                                <Row>
                                    <Col xs={2}>
                                        <Card.Img variant="top" src={handshake} style={{height: '100px',width: '100px'}}/>
                                    </Col>
                                    <Col xs={8}>
                                        <Card.Title>{event.name}</Card.Title><br/>
                                        <Card.Subtitle className="mb-2">{[event.company.company + " - " + event.location]}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Eligibility: {event.eligibility}</Card.Subtitle>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant="primary" onClick={this.enroll} value={event.id}>RSVP</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={event.id}>
                            <Card.Body>
                            <Card.Subtitle>Details :</Card.Subtitle>
                                <Row>
                                    <Col md={9} >
                                        <Card.Text>
                                            {event.description}
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })


            var eventTop = (
                <div class="mar-btm">
                    <nav class="navbar navbar-light bg-light">
                        <form class="form-inline col-md-12">
                            <input class="form-control w-100" type="search" placeholder="Event Name" value={this.state.search_event} onChange={this.updateSearch} name="search_event" />
                        </form>
                    </nav>
                </div>
            )
        }
        catch (err) {
            console.log("Applications loading");
        }

        return (
            <Card>
                {eventTop}
                <Accordion>
                    {events}
                </Accordion>
            </Card>

        )
    }
}

export default Events
