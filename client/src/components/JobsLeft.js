import React, { Component } from 'react'
import handshake from '../handshake.png'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'

export default class JobsLeft extends Component {
    render() {
        var job = this.props.job
        var subtitle = [job.company.company+" - "+job.location]
        return (
            <Container className="pad-all">
                <Row>
                    <Col >
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{job.category}</Card.Subtitle>
                    </Col>
                </Row>
            </Container>
        )
    }
}
