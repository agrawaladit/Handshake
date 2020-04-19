import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/student/Register'
import Profile from './components/student/Profile'
import Applications from './components/student/Applications'
import Events from './components/student/Events'
import EventsView from './components/company/EventsView'
import Students from './components/Students'
import Jobs from './components/Jobs'
import Messages from './components/Messages'
import RegisterCompany from './components/company/RegisterCompany'
import ProfileCompany from './components/company/ProfileCompany'
import JobsCompany from './components/company/JobsCompany'
import EventsCompany from './components/company/EventsCompany'
import Upload from './components/Upload'


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
            <Route path="/profile/:id" component={Profile} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/profilec" component={ProfileCompany} />
            <Route exact path="/profilec/:id" component={ProfileCompany} />
            <Route exact path="/jobsc" component={JobsCompany} />
            <Route exact path="/applications" component={Applications} />
            <Route exact path="/eventsc" component={EventsCompany} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/eventsview" component={EventsView} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/messages/:id" component={Messages} />
          </div>
        </div>
      </Router>
      // <Upload></Upload>
    )
  }
}

export default App
