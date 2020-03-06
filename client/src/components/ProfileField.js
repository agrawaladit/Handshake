import React, { Component } from 'react'

class ProfileField extends Component {
    state = {  }
    render() {
        return (
            <div className="card mar-btm">
                <div className="card-body">
                    <h5 className="card-title">{this.props.t1}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.t2}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Edit</a>
                </div>
            </div>
        )
    }
}

export default ProfileField