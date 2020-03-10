import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/student/Register'
import Profile from './components/student/Profile'
import Jobs from './components/student/Jobs'
import RegisterCompany from './components/company/RegisterCompany'
import ProfileCompany from './components/company/ProfileCompany'
import JobsCompany from './components/company/JobsCompany'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registerc" component={RegisterCompany} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/profilec" component={ProfileCompany} />
            <Route exact path="/jobsc" component={JobsCompany} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
