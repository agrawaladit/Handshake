import React, { Component } from 'react'
import { getApplications } from '../UserFunctions'
import jwt_decode from 'jwt-decode'
import { Card } from 'react-bootstrap'
import handshake from '../handshake.png'

export default class Applications extends Component {

    state = {
        applications: '',
        filter_status: ''
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
                    <Container className="pad-all">
                        <Row>
                            <Col xs={3}>
                                <Card.Img variant="top" src={handshake} />
                            </Col>
                            <Col xs={9}>
                                <Card.Title>{application.title}</Card.Title>
                                <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">{job.category}</Card.Subtitle>
                            </Col>
                        </Row>
                    </Container>
                )
            })
        }
        catch (err) {
            console.log("Data loading");
        }

        return (
            <Row>
                <Col>
                    <Card>
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
                <Col>
                    {apps}
                </Col>
            </Row>
        )
    }
}
