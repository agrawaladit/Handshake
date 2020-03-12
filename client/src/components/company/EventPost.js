import React, { Component } from 'react'
import { Form, Button, Col } from "react-bootstrap"
import jwt_decode from 'jwt-decode'
import { setEvents } from '../UserFunctions'

export default class EventPost extends Component {
    state = {
        name: '',
        description: '',
        time: '',
        date: '',
        location: '',
        eligibility: '',
        company: ''
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            company: decoded.id
        })
    }


    onSubmit = e => {
        e.preventDefault()
        setEvents(this.state)
        this.setState({
            name: '',
            description: '',
            time: '',
            date: '',
            location: '',
            eligibility: '',
        })
    }

    onChange = e => {

        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Form className="pad-all" onSubmit={this.onSubmit}>
                <Form.Group controlId="formname" className="m-sm-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Set name" size="lg" name='name' onChange={this.onChange} value={this.state.name} />
                </Form.Group>

                <Form.Group controlId="formDescription" className="m-sm-4">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Add Description" name='description' onChange={this.onChange} value={this.state.description} />
                </Form.Group>

                <Form.Group controlId="formLocation" className="m-sm-4">
                    <Form.Label>Eligibility</Form.Label>
                    <Form.Control placeholder="Leave Blank for All" name='eligibility' onChange={this.onChange} value={this.state.eligibility} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formCategory" className="m-sm-4">
                        <Form.Label>Location</Form.Label>
                        <Form.Control placeholder="Set Location" name='location' onChange={this.onChange} value={this.state.location} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formdate" className="m-sm-4">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name='date' onChange={this.onChange} value={this.state.date} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formtime" className="m-sm-4">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" name='time' onChange={this.onChange} value={this.state.time} />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" className="m-sm-4">
                    Submit
                </Button>
            </Form>
        )
    }
}
