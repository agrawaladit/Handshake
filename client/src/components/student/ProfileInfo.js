import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import {setUserContact} from '../UserFunctions'
import Upload from '../Upload'

export default class ProfileInfo extends Component {
    state = {
        id: this.props.contact.id,
        email: this.props.contact.id,
        phone: "",
        disable: true,
        inputClass: 'border-0 mb-2 text-muted mar-btm',
        buttonName: 'Edit'
    }

    componentWillReceiveProps(props) {
        this.setState({
            id: props.contact.id,
            email: props.contact.email,
            phone: props.contact.phone
        })
    }
    
    
    

    handleClick = e => {
        this.setState({
            inputClass: this.state.disable ? 'mb-2 text-muted mar-btm-small' : 'border-0 mb-2 text-muted mar-btm-small',
            buttonName: this.state.disable ? 'Save' : 'Edit',
            disable: !this.state.disable
        })
        this.state.disable ? console.log('edit mode on') : (
            setUserContact(this.state).then(
                console.log("User Contact Updated")
            )
        )
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }


    render() {
        return (
            <Card className="pad-all" >
                <Card.Body>
                <Card.Subtitle>Email</Card.Subtitle>
                <input type="text" name="email" disabled={this.state.disable} value={this.state.email} className={this.state.inputClass} onChange={this.handleChange} placeholder="Enter Email"/>
                <Card.Subtitle>Phone</Card.Subtitle>
                <input type="text" name="phone" disabled={this.state.disable} value={this.state.phone} className={this.state.inputClass} onChange={this.handleChange} placeholder="Enter Phone"/>
                <Button onClick={this.handleClick}>{this.state.buttonName}</Button>
                </Card.Body>
                <Card.Text>Upload Resume</Card.Text>
                <Upload id={this.state.id} mode='resume'></Upload>

            </Card>
        )
    }
}
