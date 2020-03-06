import React, { Component } from 'react'
import Profile from '../profile.png'

class ProfilePhoto extends Component {
    state = { 
        profile : Profile
    }
    render() {
        const info = this.props.state
        return (
            <div className="col-md-12 card mar-btm">
                <div className="panel text-center">
                    <div className="panel-body">
                        <img alt="Avatar" className="img-md img-circle img-border mar-btm img-fluid rounded-circle" src={this.state.profile}/>
                        <h4 className="mar-no">{info.first_name} {info.last_name}</h4>
                        <p>{info.school}</p>
                    </div>
                    <div>
                        <p className="text-muted">
                            Masters Computer Science
                        </p>
                        <p className="text-muted medium">
                            CGPA: 3.6
                        </p>
                        <div className="pad-btm">
                            <button className="btn btn-success">Message</button>
                        </div>
                    </div>
                </div>
            </div>  
            
            )
    }
}

export default ProfilePhoto