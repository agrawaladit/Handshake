import React, { Component } from 'react'
import { Accordion, Card, Form } from "react-bootstrap";
import { getApplications, setStatus } from '../UserFunctions'

export default class JobsRightCompany extends Component {

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
        setStatus(e.target.id,e.target.value).then(
            console.log("status changed")   
        )
    }

    render() {
        try {
            var application = this.state.applications.map(application => {
                return (
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={application.student_id}>
                            {application.student_name}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={application.student_id}>
                            <Card.Body>
                                <Form.Label>Current Status : {application.status}</Form.Label>
                                <Form.Control as="select" name='category' onChange={this.onChange} id={application.id} value={this.state.category}>
                                    <option value="" hidden>Change Status</option>
                                    <option>Pending</option>
                                    <option>Reviewed</option>
                                    <option>Declined</option>
                                </Form.Control>
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
