import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/student/Register'
import Profile from './components/student/Profile'
import Applications from './components/student/Applications'
import Events from './components/student/Events'
import Students from './components/Students'
import Jobs from './components/Jobs'
import RegisterCompany from './components/company/RegisterCompany'
import ProfileCompany from './components/company/ProfileCompany'
import JobsCompany from './components/company/JobsCompany'
import EventsCompany from './components/company/EventsCompany'


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
            <Route exact path="/applications" component={Applications} />
            <Route exact path="/eventsc" component={EventsCompany} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/students" component={Students} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
