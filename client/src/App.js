import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Jobs from './components/Jobs'
import LoginCompany from './components/LoginCompany'
import RegisterCompany from './components/RegisterCompany'

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
          </div>
        </div>
      </Router>
    )
  }
}

export default App
