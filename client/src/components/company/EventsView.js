import React, { Component } from 'react'
import { getEvents } from '..UserFunctions/UserFunctions'
import jwt_decode from 'jwt-decode'
import { Form, Col, Tab, Row, Nav,Container } from 'react-bootstrap'
import handshake from '../../handshake.png'

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
            var eventsLeftValues = events.map(job => {
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
            var eventsRightValues = this.state.events.map(job => {
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

        var jobTop = this.state.mode ? (
            <div class="mar-btm">
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline col-md-3">
                        <input class="form-control w-100" type="search" placeholder="Company Name" value={this.state.search_company} onChange={this.updateSearch} name="search_company" />
                    </form>
                    <form class="form-inline col-md-3">
                        <input class="form-control w-100" type="search" placeholder="Job Titles" value={this.state.search_title} onChange={this.updateSearch} name="search_title" />
                    </form>
                    <form class="form-inline col-md-3">
                        <input class="form-control w-100" type="search" placeholder="Location" value={this.state.search_location} onChange={this.updateSearch} name="search_location" />
                    </form>
                    <Col md={3}>
                        <Form.Control className="text-muted" as="select" onChange={this.updateSearch} value={this.state.search_category} name="search_category">
                            <option value="" hidden>Filter Category</option>
                            <option value="">All</option>
                            <option>Intern</option>
                            <option>Full Time</option>
                            <option>Co-op</option>
                            <option>Part Time</option>
                        </Form.Control>
                    </Col>
                </nav>
            </div>
        ) : (null)

        return (
            <div>
                {jobTop}
                <div class="card border">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={4}>
                                <Nav variant="pills" className="flex-column">
                                    {jobsLeftValues}
                                </Nav>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    {jobsRightValues}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        )
    }
}
