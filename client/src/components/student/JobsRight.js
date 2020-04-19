import React, { Component } from 'react'
import { setApplications } from '../UserFunctions'
import Upload from '../Upload'
import { Link, withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'

class JobsRight extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        student_id: '',
        job_id: '',
        status: ''
    }

    static getDerivedStateFromProps(props, state) {
        return {
            student_id: props.sid,
            job_id: props.job._id,
            student_name: props.name,
            status: 'Pending'
        }
    }


    onClick = e => {
        setApplications(this.state).then(res => {
            console.log("Applied")
          })
    }

    render() {
        console.log(this.props.job)
        var job = this.props.job
        return (
            <div className="pad-all">
                <Container>
                <h2 className="font-weight-normal">{job.title}</h2>
                </Container>
                <Link to={`/profilec/${job.company._id}`} className="nav-link">
                    <h3 className="font-weight-light">{job.company.company}</h3>
                </Link>
                <div className="row pad-all">
                <div>
                    <div className="col pad-all">
                        <p className=" text-secondary mar-rt">{job.category}</p>
                        <p className=" text-secondary mar-rt">{job.location}</p>
                        <p className=" text-secondary mar-rt">{["Salary : " + job.salary + " $"]}</p>
                        <p className=" text-secondary mar-rt">{["Posted : " + job.date]}</p>
                    </div>

                </div>
                <div className="pad-all">
                    <h5 >Job Description</h5>
                    <p >{job.description}</p>
                <br></br>
                <br></br>
                <Upload id={job._id} mode='image' f={this.onClick}></Upload>

                </div>
                
                </div>

            </div>
        )
    }
}

export default withRouter(JobsRight)