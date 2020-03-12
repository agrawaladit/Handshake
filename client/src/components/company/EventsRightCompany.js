import React, { Component } from 'react'
import { ListGroup } from "react-bootstrap";
import { getRegistrations } from '../UserFunctions'
import { Link, withRouter } from 'react-router-dom'

class EventsRightCompany extends Component {

    state = {
        events: '',
        event_id: ''
    }

    static getDerivedStateFromProps(props, state) {
        return {
            event_id: props.event
        }
    }

    onClick = e => {
        console.log(e.target.value)
    }


    componentDidMount() {
        getRegistrations().then(response => {
            if (response) {
                this.setState({
                    events: response.filter((event) => { return event.event_id === this.state.event_id })
                })
            }
        })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        try {
            
            var events = this.state.events.map(event => {
                return (
                    <ListGroup.Item action onClick={this.onClicked}>
                        {event.user.first_name} {event.user.last_name}
                    </ListGroup.Item>
                )
            })
        }
        catch (err) {
            console.log("Applications loading");
        }

        return (
            <ListGroup>
                {events}
            </ListGroup>
        )
    }
}

export default withRouter(EventsRightCompany)
