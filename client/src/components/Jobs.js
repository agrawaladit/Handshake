import React, { Component } from 'react'
import JobsLeft from './JobsLeft'
import JobsRight from './student/JobsRight'
import JobsRightCompany from './company/JobsRightCompany'
import { getJobs } from './UserFunctions'
import jwt_decode from 'jwt-decode'
import { Form, Col, Tab, Row, Nav } from 'react-bootstrap'

export default class Jobs extends Component {

    state = {
        jobs: [],
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
        getJobs().then(response => {
            if (response) {
                this.setState({
                    jobs: response
                })
            }
        })
            .catch(error => {
                console.log(error)
            })

        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        if (decoded.school) {
            console.log(decoded)
            this.setState({
                mode: true,
                student_id: decoded.id,
                student_name: decoded.first_name + " " + decoded.last_name
            })
        }
        if (decoded.company) {
            this.setState({
                mode: false,
                company: decoded.company
            })
        }
    }


    render() {
        const jobs = this.state.mode ? (
            this.state.jobs.filter(
                job => {
                    return ((job.company.toLowerCase().indexOf(this.state.search_company.toLowerCase()) !== -1) &&
                        (job.title.toLowerCase().indexOf(this.state.search_title.toLowerCase()) !== -1) &&
                        (job.location.toLowerCase().indexOf(this.state.search_location.toLowerCase()) !== -1) &&
                        (job.category.indexOf(this.state.search_category) !== -1))
                }
            )
        ) : (
                this.state.jobs.filter(
                    job => {
                        return (job.company === this.state.company)
                    }
                )
            )

        try {
            var jobsLeftValues = jobs.map(job => {
                var href = ["#" + job.id]
                return (
                    // <a class="nav-link border" id="tab" data-toggle="pill" href={href} role="tab" >
                    //     <JobsLeft job={job} />
                    // </a>
                    <Nav.Item>
                        <Nav.Link eventKey={job.id}><JobsLeft job={job} /></Nav.Link>
                    </Nav.Item>
                )
            })
        }
        catch (err) {
            console.log("Data loading");
        }


        try {
            var jobsRightValues = this.state.mode ?
                (
                    this.state.jobs.map(job => {
                        return (
                            <Tab.Pane eventKey={job.id}>
                                <JobsRight job={job} sid={this.state.student_id} sname={this.state.student_name} />
                            </Tab.Pane>
                        )
                    })
                ) : (
                    this.state.jobs.map(job => {
                        return (
                            <Tab.Pane eventKey="second">
                                <JobsRightCompany job={job} />
                            </Tab.Pane>
                        )
                    })
                )
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
