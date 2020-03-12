import React, { Component } from 'react'
import { setApplications } from '../UserFunctions'

export default class JobsRight extends Component {

    state = {
        student_id: '',
        job_id: '',
        status: ''
    }

    static getDerivedStateFromProps(props, state) {
        return {
            student_id: props.sid,
            job_id: props.job.id,
            status: 'Pending'
        }
    }


    onClick = e => {
        setApplications(this.state).then(res => {
            console.log("Applied")
          })
    }

    render() {
        var job = this.props.job
        return (
            <div className="container-fluid pad-all">
                <h2 className="font-weight-bold">{job.title}</h2>
                <h3 className="font-weight-normal">{job.company}</h3>
                <div className="row pad-all">
                    <p className="font-weight-light text-secondary mar-rt">{job.category}</p>
                    <p className="font-weight-light text-secondary mar-rt">{job.location}</p>
                    <p className="font-weight-light text-secondary mar-rt">{["Salary : " + job.salary + " $"]}</p>
                    <p className="font-weight-light text-secondary mar-rt">{["Posted : " + job.date]}</p>
                </div>
                <button type="button" class="btn btn-success mar-btm" onClick={this.onClick}>Apply</button>
                <br />
                <br />
                <h3 className="font-weight-bold">Job Description</h3>
                <p className="font-weight-light">{job.description}</p>

            </div>
        )
    }
}
