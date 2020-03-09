import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ProfilePhoto from './ProfilePhoto'
import ProfileInfo from './ProfileInfo'
import { getEducation, setEducation, setExperience, getExperience } from './UserFunctions'

class ProfileCompany extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      company: '',
      email: '',
      location: '',
      description: '',
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
  }

//   handleEducation(user) {
//     var tempUser = {
//       school: user.subtitle,
//       id: user.id,
//       major: user.f3,
//       location: user.f2,
//       degree: user.f1,
//       start_date: user.f5,
//       end_date: user.f6,
//       cgpa: user.f4
//     }
//     setEducation(tempUser).then(res => {
//       console.log("education data added")
//     })
//   }

//   handleExperience(user) {
//     var tempUser = {
//       company: user.subtitle,
//       id: user.id,
//       duration: user.f3,
//       location: user.f2,
//       title: user.f1,
//       start_date: user.f5,
//       end_date: user.f6,
//       description: user.f4
//     }
//     setExperience(tempUser).then(res => {
//       console.log("experience data added")
//     })
//   }

  render() {
    // const education = this.state.education.map(edu => {
    //   return(<ProfileField t1="Education" t2={edu.school} todo={this.handleEducation} key={Math.random()}/>)
    // })
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <ProfilePhoto state={this.state} />
            <ProfileInfo />
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileCompany
