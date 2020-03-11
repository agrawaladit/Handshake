import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export default class JobsTop extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline col-md-4">
                        <input class="form-control w-100" type="search" placeholder="Company Name" />
                    </form>
                    <form class="form-inline col-md-4">
                        <input class="form-control w-100" type="search" placeholder="Job Titles" />
                    </form>
                    <form class="form-inline col-md-4 ">
                        <input class="form-control w-100" type="search" placeholder="Location" />
                    </form>
                </nav>
            </div>
        )
    }
}
