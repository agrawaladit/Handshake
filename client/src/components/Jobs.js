import React, { Component } from 'react'
import JobsLeft from './student/JobsLeft'
import JobsRight from './student/JobsRight'
import JobsTop from './student/JobsTop'
import { getJobs } from './UserFunctions'

export default class Jobs extends Component {

    state = {
        jobs: ''
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
    }


    render() {
        try {
            var jobsLeftValues = this.state.jobs.map(job => {
                var href = ["#"+job.id]
                return (
                <a class="nav-link border" id="tab" data-toggle="pill" href={href} role="tab" aria-controls={job.id} aria-selected="false">
                    <JobsLeft job={job}/>
                </a>
                )
            })
        }
        catch (err) {
            console.log("Data loading");
        }

        try {
            var jobsRightValues = this.state.jobs.map(job => {
                return (
                <div class="tab-pane fade" id={job.id} role="tabpanel" aria-labelledby="tab">
                    <JobsRight job={job}/>
                </div>
                )
            })
        }
        catch (err) {
            console.log("Data loading");
        }
        return (
            <div>
                <div class="mar-btm">
                    <JobsTop />
                </div>
                <div class="card border">
                    <div class="row">
                        <div class="col-5">
                            <div class="nav flex-column nav-tabs" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ backgroundColor: '#DEDEDE' }}>
                                {/* <a class="nav-link active border" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><JobsLeft /></a>
                                <a class="nav-link border" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><JobsLeft /></a>
                                <a class="nav-link border" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><JobsLeft /></a>
                                <a class="nav-link border" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><JobsLeft /></a> */}
                                {jobsLeftValues}
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="tab-content" id="v-pills-tabContent">
                                {/* <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><JobsRight /></div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><JobsRight /></div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><JobsRight /></div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><JobsRight /></div> */}
                                {jobsRightValues}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
