import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ProfilePhoto from './ProfilePhoto'
import ProfileField from './ProfileField'
import ProfileSkill from './ProfileSkill'
import ProfileInfo from './ProfileInfo'
import { setEducation, setExperience, getProfile } from '../UserFunctions'

class Profile extends Component {
  state = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    school: '',
    education: [],
    experience: [],
    student: '',
    contact: [],
    errors: {}
  }

  componentDidMount() {

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    getProfile(decoded.id).then(res => {
      this.setState({
        id: res.id,
        first_name: res.first_name,
        last_name: res.last_name,
        email: res.email,
        school: res.school,
        education: res.user_education,
        experience: res.user_experience,
        contact: res.user_contact
      })
      return res
    })


  }

  handleEducation(user) {
    var tempUser = {
      school: user.subtitle,
      id: user.id,
      major: user.f3,
      location: user.f2,
      degree: user.f1,
      start_date: user.f5,
      end_date: user.f6,
      cgpa: user.f4
    }
    setEducation(tempUser).then(res => {
      console.log("education data added")
    })
  }

  handleExperience(user) {
    var tempUser = {
      company: user.subtitle,
      id: user.id,
      duration: user.f3,
      location: user.f2,
      title: user.f1,
      start_date: user.f5,
      end_date: user.f6,
      description: user.f4
    }
    setExperience(tempUser).then(res => {
      console.log("experience data added")
    })
  }

  render() {
    // const education = this.state.education.map(edu => {
    //   return(<ProfileField t1="Education" t2={edu.school} todo={this.handleEducation} key={Math.random()}/>)
    // })
    console.log(this.state)
    const ed = this.state.education || {}
    const ex = this.state.experience || {}

    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <ProfilePhoto state={this.state} />
            <ProfileSkill />
            <ProfileInfo contact={this.state.contact || {}} />
          </div>
          <div className="col-xl-9">
            <ProfileField t1="Education" t2="Demo" todo={this.handleEducation} eduComp={true} t2={ed.school} id={this.state.id} f1={ed.degree} f2={ed.location} f3={ed.major} f4={ed.cgpa} f5={ed.start_date} f6={ed.end_date} />
            <ProfileField t1="Experience" t2="Demo" todo={this.handleExperience} eduComp={false} t2={ex.company} id={this.state.id} f1={ex.title} f2={ex.location} f3={ex.duration} f4={ex.description} f5={ex.start_date} f6={ex.end_date} />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
