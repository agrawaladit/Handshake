import React, { Component } from 'react'
import { getApplications } from '../UserFunctions'
import jwt_decode from 'jwt-decode'
import { Card } from 'react-bootstrap'
import handshake from '../../handshake.png'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { get_apps } from '../../actions/actions'

class Applications extends Component {

    state = {
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
                this.props.get_apps( response.filter((app) => {
                        return app.student === decoded._id
                    }))
            }
        })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        
        if (this.props.apps[0].status) {
            const applications = this.props.apps.filter(application => { return (application.status.indexOf(this.state.filter_status) !== -1) })

            try {
                var apps = applications.map(application => {
                    return (
                        <Card className="pad-all">
                            <Row>
                                <Col xs={2}>
                                    <Card.Img variant="top" src={handshake} style={{ height: '100px', width: '100px' }} />
                                </Col>
                                <Col xs={10} className='pad-all'>
                                    <Card.Title>{application.job.title}</Card.Title>
                                    <Card.Subtitle className="mb-2">{application.job.company}</Card.Subtitle><br />
                                    <Card.Subtitle className="mb-2 text-muted">Status: {application.status}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Applied: {application.job.date} - Deadline: {application.job.deadline}</Card.Subtitle>
                                </Col>
                            </Row>
                        </Card>
                    )
                })
            }
            catch (err) {
                console.log(err);
            }

            return (
                <Row>
                    <Col sm={3}>
                        <Card style={{ height: '100%' }} className='pad-all'>
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
        else {
            return (<div></div>)
        }
    }
}

const mapStateToProps = (state) => ({
    apps: state.appReducer.apps
})

export default connect(mapStateToProps, { get_apps })(Applications)
