import axios from 'axios'
const qs = require('querystring')

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export const register = newUser => {
  return axios
    .post('users/register', qs.stringify({
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      school: newUser.school
    }), config)
    .then(response => {
      console.log('Student Registered')
    })
}

export const registerCompany = newUser => {
  return axios
    .post('companies/register', qs.stringify({
      company: newUser.company,
      email: newUser.email,
      password: newUser.password,
      location: newUser.location
    }), config)
    .then(response => {
      console.log('Company Registered')
    })
}

export const login = user => {
  if (user.category === 'student') {
    return axios
      .post('users/login', qs.stringify({
        email: user.email,
        password: user.password
      }), config)
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
  if (user.category === 'employer') {
    return axios
      .post('companies/login', qs.stringify({
        email: user.email,
        password: user.password
      }), config)
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
  return axios.post()
}

export const setEducation = user => {
  return axios
    .post('education', qs.stringify({
      school: user.school,
      id: user.id,
      major: user.major,
      location: user.location,
      degree: user.degree,
      start_date: user.start_date,
      end_date: user.end_date,
      cgpa: user.cgpa
    }), config)
    .then(response => {
      console.log("Education Field Added")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getEducation = id => {
  return axios
    .get('education?id=' + id)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const setExperience = user => {
  return axios
    .post('experience', qs.stringify({
      company: user.company,
      title: user.title,
      id: user.id,
      description: user.description,
      location: user.location,
      start_date: user.start_date,
      end_date: user.end_date,
      duration: user.duration,
    }), config)
    .then(response => {
      console.log("Experience Field Added")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getExperience = id => {
  return axios
    .get('experience?id=' + id)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
