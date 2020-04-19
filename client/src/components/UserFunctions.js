import axios from 'axios'
const qs = require('querystring')

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export const register = newUser => {
  return axios
    .post('http://localhost:5000/users/register', qs.stringify({
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
    .post('http://localhost:5000/companies/register', qs.stringify({
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
      .post('http://localhost:5000/users/login', qs.stringify({
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
      .post('http://localhost:5000/companies/login', qs.stringify({
        email: user.email,
        password: user.password
      }), config)
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response
      })
      .catch(err => {
        console.log(err)
      })
  }
  return axios.post()
}

export const setEducation = user => {
  return axios
    .post('http://localhost:5000/users/education', qs.stringify({
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

// export const getEducation = id => {
//   return axios
//     .get('education?id=' + id)
//     .then(response => {
//       return response.data
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

export const getProfile = id => {
  return axios
    .get('http://localhost:5000/users/profile?id=' + id)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const setExperience = user => {
  return axios
    .post('http://localhost:5000/users/experience', qs.stringify({
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

// export const getExperience = id => {
//   return axios
//     .get('experience?id=' + id)
//     .then(response => {
//       console.log(response.data)
//       return response.data
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }


export const setCompany = company => {
  return axios
    .post('http://localhost:5000/companies/update', qs.stringify({
      company: company.company,
      email: company.email,
      location: company.location,
      id: company.id,
      description: company.description
    }), config)
    .then(response => {
      console.log("Company Field Updated")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCompany = id => {
  return axios
    .get('http://localhost:5000/companies/profile?id=' + id)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getJobs = () => {
  return axios
    .get('http://localhost:5000/jobs')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const setJobs = job => {
  return axios
    .post('http://localhost:5000/jobs', qs.stringify({
      company: job.company,
      title: job.title,
      description: job.description,
      location: job.location,
      deadline: job.deadline,
      category: job.category,
      salary: job.salary
    }), config)
    .then(response => {
      console.log("Job Field Added")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getApplications = () => {
  return axios
    .get('http://localhost:5000/applications')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const setApplications = app => {
  return axios
    .post('http://localhost:5000/applications', qs.stringify({
      student_id: app.student_id,
      job_id: app.job_id,
      student_name: app.student_name,
      status: app.status
    }), config)
    .then(response => {
      console.log("Job Applied")
    })
    .catch(err => {
      console.log(err)
    })
}

export const setStatus = (id, status) => {
  return axios
    .post('http://localhost:5000/applications/update', qs.stringify({
      id: id,
      status: status
    }), config)
    .then(response => {
      console.log("Status Updated")
    })
    .catch(err => {
      console.log(err)
    })
}

export const setUserContact = user => {
  return axios
    .post('http://localhost:5000/users/contact', qs.stringify({
      id: user.id,
      email: user.email,
      phone: user.phone
    }), config)
    .then(response => {
      console.log("Education Field Added")
    })
    .catch(err => {
      console.log(err)
    })
}

// export const getUserContact = id => {
//   return axios
//     .get('usercontact?id=' + id)
//     .then(response => {
//       return response.data
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

export const getUsers = () => {
  return axios
    .get('http://localhost:5000/users')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}


export const getEvents = () => {
  return axios
    .get('http://localhost:5000/events')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const setEvents = job => {
  return axios
    .post('http://localhost:5000/events', qs.stringify({
      company: job.company,
      name: job.name,
      description: job.description,
      time: job.time,
      date: job.date,
      location: job.location,
      eligibility: job.eligibility,
    }), config)
    .then(response => {
      console.log("Event Added")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getRegistrations = () => {
  return axios
    .get('http://localhost:5000/registrations')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const setRegistrations = reg => {
  return axios
    .post('http://localhost:5000/registrations', qs.stringify({
      student_id: reg.student_id,
      event_id: reg.event_id
    }), config)
    .then(response => {
      console.log("Registered")
    })
    .catch(err => {
      console.log(err)
    })
}

export const upload = reg => {
  return axios
    .post('http://localhost:5000/registrations', qs.stringify({
      student_id: reg.student_id,
      event_id: reg.event_id
    }), config)
    .then(response => {
      console.log("Registered")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getMessages = () => {
  return axios
    .get('http://localhost:5000/messages')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const setMessages = job => {
  return axios
    .post('http://localhost:5000/messages', qs.stringify({
      company: job.company,
      student: job.student,
      messages: job.messages
    }), config)
    .then(response => {
      console.log("Message Added")
    })
    .catch(err => {
      console.log(err)
    })
}