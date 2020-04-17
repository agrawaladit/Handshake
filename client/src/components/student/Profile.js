import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ProfilePhoto from './ProfilePhoto'
import ProfileField from './ProfileField'
import ProfileSkill from './ProfileSkill'
import ProfileInfo from './ProfileInfo'
import { setEducation, setExperience, getProfile } from '../UserFunctions'
import { connect } from 'react-redux'
import { get_profile, set_edu, set_exp } from '../../actions/actions'

class Profile extends Component {

  state = {
    a : ''
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
    getProfile(id).then(res => {
      this.props.get_profile(res)
      return res
    })
    this.setState({a:'b'})
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
    // this.props.set_edu(tempUser)
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
    //this.props.set_exp(tempUser)
  }

  render() {
    console.log(this.props.profile)
    const ed = this.props.profile.education || {}
    const ex = this.props.profile.experience || {}

    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <ProfilePhoto state={this.props.profile} />
            <ProfileSkill />
            <ProfileInfo contact={this.props.profile.contact || {}} id={this.props.profile.id} />
          </div>
          <div className="col-xl-9">
            <ProfileField t1="Education-1" g1="Education-2" t2="Demo" todo={this.handleEducation} eduComp={true} t2={ed.school} id={this.props.profile.id} f1={ed.degree} f2={ed.location} f3={ed.major} f4={ed.cgpa} f5={ed.start_date} f6={ed.end_date} />
            <ProfileField t1="Experience" g1="Experience" t2="Demo" todo={this.handleExperience} eduComp={false} t2={ex.company} id={this.props.profile.id} f1={ex.title} f2={ex.location} f3={ex.duration} f4={ex.description} f5={ex.start_date} f6={ex.end_date} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  return {
    profile: state.profileReducer,
    id: id
  }
}

export default connect(mapStateToProps, { get_profile, set_edu, set_exp })(Profile)
