import React, { Component } from 'react'
import { Form, Button, Col } from "react-bootstrap"
import jwt_decode from 'jwt-decode'
import {setJobs} from '../UserFunctions'

export default class JobPost extends Component {
    state = {
        title: '',
        description: '',
        location: '',
        deadline: '',
        category: '',
        salary: '',
        company: ''
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            company: decoded.company
        })
    }
    

    onSubmit = e => {
        e.preventDefault()
        setJobs(this.state)
        this.setState({
            title: '',
            description: '',
            location: '',
            deadline: '',
            category: '',
            salary: '',
        })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Form className="pad-all" onSubmit={this.onSubmit}>
                <Form.Group controlId="formTitle" className="m-sm-4">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Set Title" size="lg" name='title' onChange={this.onChange} value={this.state.title}/>
                </Form.Group>

                <Form.Group controlId="formDescription" className="m-sm-4">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Add Description" name='description' onChange={this.onChange} value={this.state.description}/>
                </Form.Group>

                <Form.Group controlId="formLocation" className="m-sm-4">
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="Set Location" name='location' onChange={this.onChange} value={this.state.location}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formDeadline" className="m-sm-4">
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control type="date" name='deadline' onChange={this.onChange} value={this.state.deadline}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCategory" className="m-sm-4">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" name='category' onChange={this.onChange} value={this.state.category}>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Intern</option>
                            <option>Co-op</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formSalary" className="m-sm-4">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control placeholder="Add Salary" name='salary' onChange={this.onChange} value={this.state.salary}/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" className="m-sm-4">
                    Submit
                </Button>
            </Form>
        )
    }
}
