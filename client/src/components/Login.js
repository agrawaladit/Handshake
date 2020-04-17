import React, { Component } from 'react'
import {connect} from 'react-redux'

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

    this.props.login(user, this.props)
  }

  render() {
    return (
      <div className="container bg-primary">
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
                className="btn btn-lg btn-secondary btn-block"
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


const mapDispatchToState = (dispatch) => {
  return {
    login: (user, props) => {dispatch({type: 'LOGIN', user: user, props: props})}
  }
}

export default connect(null, mapDispatchToState)(Login)
