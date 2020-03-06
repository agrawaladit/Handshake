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
      school: newUser.school,
      category: newUser.category
    }),config)
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', qs.stringify({
      email: user.email,
      password: user.password
    }),config)
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const setEducation = user => {
  return axios
    .post('education', qs.stringify({
      school: user.school,
      id: user.id,
      major: user.major,
      minor: user.minor,
      start_date: user.start_date,
      end_date: user.end_date,
    }),config)
    .then(response => {
      console.log("Education Field Added")
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getEducation = id => {
  return axios
    .get('education?id='+id)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
