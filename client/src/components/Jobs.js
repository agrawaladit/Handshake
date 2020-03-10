import React, { Component } from 'react'
import JobsLeft from './JobsLeft'
import JobsRight from './student/JobsRight'
import JobsRightCompany from './company/JobsRightCompany'
import JobsTop from './student/JobsTop'
import { getJobs } from './UserFunctions'
import jwt_decode from 'jwt-decode'

export default class Jobs extends Component {

    state = {
        jobs: '',
        mode: true
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
            this.setState({ mode: true })
        }
        if (decoded.company) {
            this.setState({ mode: false })
        }
    }


    render() {
        try {
            var jobsLeftValues = this.state.jobs.map(job => {
                var href = ["#" + job.id]
                return (
                    <a class="nav-link border" id="tab" data-toggle="pill" href={href} role="tab" aria-controls={job.id} aria-selected="false">
                        <JobsLeft job={job} />
                    </a>
                )
            })
        }
        catch (err) {
            console.log("Data loading");
        }


        try {
            var jobsRightValues = this.state.mode ? (
                this.state.jobs.map(job => {
                    return (
                        <div class="tab-pane fade" id={job.id} role="tabpanel" aria-labelledby="tab">
                            <JobsRight job={job} />
                        </div>
                    )
                })
            ) : (
                    this.state.jobs.map(job => {
                        return (
                            <div class="tab-pane fade" id={job.id} role="tabpanel" aria-labelledby="tab">
                                <JobsRightCompany job={job} />
                            </div>
                        )
                    })
                )
        }
        catch (err) {
            console.log("Data loading");
        }

        var jobTop = this.state.mode ? (
            <div class="mar-btm">
                <JobsTop />
            </div>
        ) : (null)

        return (
            <div>
                {jobTop}
                <div class="card border">
                    <div class="row">
                        <div class="col-5">
                            <div class="nav flex-column nav-tabs" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ backgroundColor: '#DEDEDE' }}>
                                {jobsLeftValues}
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="tab-content" id="v-pills-tabContent">
                                {jobsRightValues}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
