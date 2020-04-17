import React, { Component } from 'react'
import { getMessages, setMessages } from './UserFunctions'
import { Card, Container, Col, Tab, Row, Nav, InputGroup, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { get_messages } from '../actions/actions'

class Messages extends Component {

    state = {
        messages: '',
        id: ''
    }


    componentDidMount() {
        getMessages().then(response => {
            console.log(response)
            if (response) {
                this.props.get_messages(response)
                this.setState({
                    messages: '',
                    id: this.props.id
                })
            }
        })
            .catch(error => {
                console.log(error)
            })
    }

    send(e) {
        const temp = {
            student: "Rachel",
            company: "Ralph Lauren",
            messages: document.getElementById("mes").getAttribute("f") +": "+ document.getElementById("mes").value
        }
        setMessages(temp)
    }


    render() {
        console.log(this.state);
        if (this.props.convo[0]) {

            try {
                var messagesLeftValues = this.props.convo.map(conv => {
                    return (
                        <Nav.Item>
                            <Nav.Link eventKey={conv._id}>
                                <Container className="pad-all">
                                    <Row>
                                        <Col>
                                            <Card.Text>{"Student: " + conv.student}</Card.Text>
                                            <Card.Text>{"Company: " + conv.company}</Card.Text>
                                        </Col>
                                    </Row>
                                </Container>
                            </Nav.Link>
                        </Nav.Item>
                    )
                })
            }
            catch (err) {
                console.log("Data loading");
            }


            try {
                var messagesRightValues = this.props.convo.map(conv => {
                    return (
                        <Container>
                            <Tab.Pane eventKey={conv._id}>
                                {
                                    conv.messages.map(message => {
                                        return (<Container><Card className="pad-all">{message}</Card></Container>)
                                    })}
                            </Tab.Pane>
                            <Card className="pad-all">
                                <InputGroup>
                                    <FormControl
                                        placeholder="Type Message"
                                        aria-label="Type Message"
                                        aria-describedby="basic-addon2"
                                        id="mes" 
                                        f={this.state.id}

                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary"  onClick={this.send}>Button</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card>
                        </Container>
                    )
                })

            }
            catch (err) {
                console.log(err);
            }

            return (
                <div>
                    <div class="card border">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={4}>
                                    <Nav variant="tabs" className="flex-column">
                                        {messagesLeftValues}
                                    </Nav>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content>
                                        {messagesRightValues}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    
    return {
        convo: state.messageReducer.convo,
        id: id
    }
}


export default connect(mapStateToProps, { get_messages })(Messages)