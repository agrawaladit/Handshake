import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Card, Button } from 'react-bootstrap'
import Landscape from '../../landscape.jpeg'
import { getCompany, setCompany } from '../UserFunctions'
import Upload from '../Upload'
import { connect } from 'react-redux'

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
        let id = ''
        if (this.props.id) {
            id = this.props.id
        }
        else {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            id = decoded._id
        }
        getCompany(id).then(response => {
            if (response) {
                this.setState({
                    company: response.company,
                    email: response.email,
                    location: response.location,
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
        const profile = Landscape
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <input type="text" name="company" disabled={this.state.disable} value={this.state.company} className={this.state.inputClass} onChange={this.handleChange} placeholder="Add Company Name" style={{ fontSize: 50 }} />
                    </Card.Title>
                    <Card.Text style={{ fontSize: 25 }}>
                        {"Location: "}<input type="text" name="location" disabled={this.state.disable} value={this.state.location} className={this.state.descClass} onChange={this.handleChange} placeholder="Add Location" /><br />
                        {"Email: "}<input type="text" name="email" disabled={this.state.disable} value={this.state.email} className={this.state.descClass} onChange={this.handleChange} placeholder="Add Email" /><br /><br />
                        {"Description: "}<br /><input type="text" name="description" disabled={this.state.disable} value={info.description} className={this.state.descClass} onChange={this.handleChange} placeholder="Add Description" style={{ fontSize: 20 }} />
                    </Card.Text>
                    <Button variant="secondary" onClick={this.handleClick}>{this.state.buttonName}</Button>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    return {
        id: id
    }
}

export default connect(mapStateToProps)(ProfileCompany)
