import React, { Component } from 'react'
import { Accordion, Card, Form, Button, Row, Col } from "react-bootstrap";
import { getApplications, setStatus } from '../UserFunctions'
import { Link, withRouter } from 'react-router-dom'

class JobsRightCompany extends Component {

    state = {
        applications: '',
        job_id: '',
        category: ''
    }

    static getDerivedStateFromProps(props, state) {
        return {
            job_id: props.job.id
        }
    }

    checkJobId = (app) => {
        return app.job_id === this.state.job_id
    }

    componentDidMount() {
        getApplications().then(response => {
            if (response) {
                this.setState({
                    applications: response.filter(this.checkJobId)
                })
            }
        })
            .catch(error => {
                console.log(error)
            })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        setStatus(e.target.id, e.target.value).then(
            console.log("status changed")
        )
    }

    render() {
        try {
            var application = this.state.applications.map(application => {
                return (
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={application.student_id}>
                            {application.user.first_name + " " + application.user.last_name}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={application.student_id}>
                            <Card.Body>
                                <Form.Label>Current Status : {application.status}</Form.Label>
                                <Row>
                                    <Col md={5} >
                                        <Form.Control className="mar-top" as="select" name='category' onChange={this.onChange} id={application.id} value={this.state.category}>
                                            <option value="" hidden>Change Status</option>
                                            <option>Pending</option>
                                            <option>Reviewed</option>
                                            <option>Declined</option>
                                        </Form.Control>
                                    </Col>
                                    <Col md={4} >
                                        <Link to="/profile" className="nav-link">
                                            <Button variant="primary" >View Resume</Button>
                                        </Link>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={["/profile/" + application.student_id]} className="nav-link">
                                            <Button variant="primary" >Go to Profile</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })
        }
        catch (err) {
            console.log("Applications loading");
        }

        return (
            <Accordion>
                {application}
            </Accordion>
        )
    }
}

export default withRouter(JobsRightCompany)
