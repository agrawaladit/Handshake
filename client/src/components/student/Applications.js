import React, { Component } from 'react'
import { getApplications } from '../UserFunctions'
import jwt_decode from 'jwt-decode'
import { Card } from 'react-bootstrap'
import handshake from '../../handshake.png'
import {Container,Row,Col,Form} from 'react-bootstrap'

export default class Applications extends Component {

    state = {
        applications: [],
        filter_status: ''
    }

    updateFilter = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkStudentId = (app) => {
        return app.student_id === this.state.id
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        getApplications().then(response => {
            if (response) {
                this.setState({
                    applications: response.filter((app) => {
                        return app.student_id === decoded.id
                    })
                })
            }
        })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const applications = this.state.applications.filter(application => { return (application.status.indexOf(this.state.filter_status) !== -1) })

        try {
            var apps = applications.map(application => {
                return (
                    <Card className="pad-all">
                        <Row>
                            <Col xs={2}>
                                <Card.Img variant="top" src={handshake} style={{height: '100px', width: '100px'}} />
                            </Col>
                            <Col xs={10} className='pad-all'>
                                <Card.Title>{application.job_posting.title}</Card.Title>
                                <Card.Subtitle className="mb-2">{application.job_posting.company}</Card.Subtitle><br/>
                                <Card.Subtitle className="mb-2 text-muted">Status: {application.status}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Applied: {application.job_posting.date} - Deadline: {application.job_posting.deadline}</Card.Subtitle>
                            </Col>
                        </Row>
                    </Card>
                )
            })
        }
        catch (err) {
            console.log("Data loading");
        }

        return (
            <Row>
                <Col sm={3}>
                    <Card style={{height : '100%'}} className='pad-all'>
                        <Card.Subtitle>Filter Status</Card.Subtitle>
                        <Form.Control className="text-muted" as="select" onChange={this.updateFilter} value={this.state.filter_status} name="filter_status">
                            <option value="" hidden>Filter Status</option>
                            <option value="">All</option>
                            <option>Pending</option>
                            <option>Reviewed</option>
                            <option>Declined</option>
                        </Form.Control>
                    </Card>
                </Col>
                <Col sm={9}>
                    {apps}
                </Col>
            </Row>
        )
    }
}
