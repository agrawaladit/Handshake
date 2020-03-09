import React, { Component } from 'react'
import {Row,Col,Card} from 'react-bootstrap'

export default class ProfileInfo extends Component {
    render() {
        return (
            <Card className="pad-all">
                <Card.Subtitle>Email</Card.Subtitle>
                <Card.Text>demo email</Card.Text>
                <Card.Subtitle>Phone</Card.Subtitle>
                <Card.Text>demo phone</Card.Text>
            </Card>
        )
    }
}
