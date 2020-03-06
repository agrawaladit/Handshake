import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ProfilePhoto from './ProfilePhoto'
import ProfileField from './ProfileField'
import {getEducation, setEducation} from './UserFunctions'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      id : '',
      first_name: '',
      last_name: '',
      email: '',
      school: '',
      education: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      id: decoded.id,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      school: decoded.school,
    })
    getEducation(decoded.id).then(response => {
      if (response) {
        this.setState({
          education: response
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleEducation(user){
    setEducation(user).then(res => {
      this.props.history.push(`/profile`)
    })
  }

  render() {
    console.log(this.state.education)
    return (
      <div className="container">
          <div className="row">
              <div className="col-xl-3">
                <ProfilePhoto state = {this.state}  />
              </div>
              <div className="col-xl-9">
                <ProfileField t1="My Journey" t2="demo" todo={this.handleEducation}/>
                <ProfileField t1="Education" t2={this.state.education} todo={this.handleEducation}/>
                <ProfileField t1="Experience" t2="demo" todo={this.handleEducation}/>
              </div>
          </div>
      </div>
    )
  }
}

export default Profile
