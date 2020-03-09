import React, { Component } from 'react'
import { login } from './UserFunctions'
import jwt_decode from 'jwt-decode'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      category: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password,
      category: this.state.category
    }

    login(user)
      .then(res => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        if (res && decoded.school) {
          this.props.history.push(`/profile`)
        }
        if (res && decoded.company) {
          this.props.history.push(`/profilec`)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  className="form-control"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  required>
                  <option value="" disabled hidden>Choose category</option>
                  <option value="student">Student</option>
                  <option value="employer">Employer</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
