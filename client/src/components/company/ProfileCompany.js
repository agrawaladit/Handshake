import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Card, Button } from 'react-bootstrap'
import Landscape from '../../landscape.jpeg'
import { getCompany, setCompany } from '../UserFunctions'
import Upload from '../Upload'

class ProfileCompany extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            company: '',
            email: '',
            location: '',
            description: '',
            info: '',
            disable: true,
            inputClass: 'border-0 mb-2',
            descClass: 'border-0 mb-0',
            buttonName: 'Edit',
            errors: {}
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            id: decoded.id,
            company: decoded.company,
            email: decoded.email,
            location: decoded.location,
        })
        getCompany(decoded.id).then(response => {
            if (response) {
                this.setState({
                    info: response
                })
            }
        })
            .catch(error => {
                console.log(error)
            })
        console.log(this.state.info)
    }

    handleClick = e => {
        this.setState({
            inputClass: this.state.disable ? 'mb-2' : 'border-0 mb-2',
            descClass: this.state.disable ? 'mb-0' : 'border-0 mb-0',
            buttonName: this.state.disable ? 'Save' : 'Edit',
            disable: !this.state.disable
        })
        var tempComp = {
            company: this.state.company,
            id: this.state.id,
            location: this.state.location,
            email: this.state.email,
            description: this.state.description
        }
        this.state.disable ? console.log('edit mode on') : (
            setCompany(tempComp).then(res => {
                console.log("Company data added")
            })
        );
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const info = this.state.info
        console.log(info)
        const profile = info.image ? ('/uploads/company/image/'+info.image) : Landscape
        return (
            <Card>
                <Card.Img variant="top" src={'/uploads/company/image/'+info.image} style={{ height: '200px' }} />
                <Card.Body>
                    <Card.Title>
                        <input type="text" name="company" disabled={this.state.disable} value={this.state.company} className={this.state.inputClass} onChange={this.handleChange} placeholder="Add Company Name" style={{ fontSize: 50 }} />
                    </Card.Title>
                    <Card.Text style={{ fontSize: 25 }}>
                        {"Location: "}<input type="text" name="location" disabled={this.state.disable} value={this.state.location} className={this.state.descClass} onChange={this.handleChange} placeholder="Add Location" /><br />
                        {"Email: "}<input type="text" name="email" disabled={this.state.disable} value={this.state.email} className={this.state.descClass} onChange={this.handleChange} placeholder="Add Email" /><br /><br />
                        {"Description: "}<br /><input type="text" name="description" disabled={this.state.disable} value={info.description} className={this.state.descClass} onChange={this.handleChange} placeholder="Add Description" style={{ fontSize: 20 }} />
                    </Card.Text>
                    <Button onClick={this.handleClick}>{this.state.buttonName}</Button>
                </Card.Body>
                <Upload id={info.id} mode='company'></Upload>
            </Card>
        )
    }
}

export default ProfileCompany
