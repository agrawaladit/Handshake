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
                <h2 className="font-weight-normal">{job.title}</h2>
                <h3 className="font-weight-light">{job.company.company}</h3>
                <div className="row pad-all">
                    <p className=" text-secondary mar-rt">{job.category}</p>
                    <p className=" text-secondary mar-rt">{job.location}</p>
                    <p className=" text-secondary mar-rt">{["Salary : " + job.salary + " $"]}</p>
                    <p className=" text-secondary mar-rt">{["Posted : " + job.date]}</p>
                </div>
                <button type="button" class="btn-fail mar-btm" onClick={this.onClick}>Apply</button>
                <br />
                <br />
                <h3 >Job Description</h3>
                <p >{job.description}</p>

            </div>
        )
    }
}
