import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ProfilePhoto from './ProfilePhoto'
import ProfileField from './ProfileField'
import ProfileSkill from './ProfileSkill'
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
      education: [],
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
    const education = this.state.education.map(edu => {
      return(<ProfileField t1="Education" t2={edu.school} todo={this.handleEducation} key={Math.random()}/>)
    })
    return (
      <div className="container">
          <div className="row">
              <div className="col-xl-3">
                <ProfilePhoto state = {this.state}  />
                <ProfileSkill/>
              </div>
              <div className="col-xl-9">
                <ProfileField t1="My Journey" t2="Demo" todo={this.handleEducation} key={Math.random()}/>
                {education}
                <ProfileField t1="Experience" t2="Demo" todo={this.handleEducation} key={Math.random()}/>
              </div>
          </div>
      </div> 
    )
  }
}

export default Profile
