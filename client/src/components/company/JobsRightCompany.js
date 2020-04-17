import React, { Component } from 'react'
import { Accordion, Card, Form, Button, Row, Col } from "react-bootstrap";
import { getApplications, setStatus,getProfile } from '../UserFunctions'
import { Link, withRouter } from 'react-router-dom'
import MyModal from './MyModal'

class JobsRightCompany extends Component {
      
    state = {
        applications: '',
        job_id: '',
        category: '',
        temp: ''
    }

    static getDerivedStateFromProps(props, state) {
        return {
            job_id: props.job._id
        }
    }


    componentDidMount() {
        getApplications().then(response => {
            
            if (response) {
                this.setState({
                    applications: response
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

    // getPath = id => {
    //     getProfile(id).then(response => {
            
    //         if (response) {
    //             ('/uploads/company/image/'+response.user_contact.resume)
    //         }
    //     })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }


    render() {
        if (this.state.applications[0]){
        try {
            const a = this.state.applications.filter((app) => {return app.job === this.state.job_id})
            var application = a.map(application => {
                return (
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={application.student}>
                            {application.student_name}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={application.student}>
                            <Card.Body>
                                <Form.Label>Current Status : {application.status}</Form.Label>
                                <Row>
                                        <Form.Control className="mar-top mar-btm pad-all" as="select" name='category' onChange={this.onChange} id={application._id} value={this.state.category}>
                                            <option value="" hidden>Change Status</option>
                                            <option>Pending</option>
                                            <option>Reviewed</option>
                                            <option>Declined</option>
                                        </Form.Control>
                                        <MyModal id={application._id}/>
                                        <Link to={`/profile/${application.student}`} className="nav-link">
                                            <Button variant="secondary" >Go to Profile</Button>
                                        </Link>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })
        }
        catch (err) {
            console.log(err);
        }

        return (
            <Accordion>
                {application}
            </Accordion>
        )
        }
        else {
            return (
                <Accordion>
                </Accordion>
            )
        }
    }
}

export default withRouter(JobsRightCompany)