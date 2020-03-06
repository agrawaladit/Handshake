import React, { Component } from 'react'

class ProfileField extends Component {
    state = {  }
    render() {
        return (
            <div className="container mar-btm">
                <div className="card">
                    <div className="card-block">
                        <h4>{this.props.t1}</h4>
                        <h5 className="card-title">{this.props.t2}</h5>
                        <div className="meta">
                            <a >Friends</a>
                        </div>
                        <div className="card-text">
                            Tawshif is a web designer living in Bangladesh.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileField