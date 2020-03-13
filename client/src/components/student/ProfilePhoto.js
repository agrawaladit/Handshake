import React, { Component } from 'react'
import Profile from '../../profile.png'
import Upload from '../Upload'

class ProfilePhoto extends Component {
    state = { 
        profile : Profile
    }
    render() {
        const info = this.props.state
        const profile = '/uploads/user/image/'+info.contact.image ? ('/uploads/user/image/'+info.contact.image) : this.state.profile
        console.log(profile);
        
        return (
            <div className="col-md-12 card mar-btm">
                <div className="panel text-center">
                    <div className="panel-body">
                        <img alt="Avatar" className="img-l img-circle img-border mar-btm img-fluid rounded-circle" src={profile}/>
                        <h4 className="mar-no">{info.first_name} {info.last_name}</h4>
                        <p>{info.school}</p>
                    </div>
                    <div>
                        <p className="text-muted">
                            {info.education.major}
                        </p>
                        <div className="pad-btm">
                            <button className="btn btn-success">Message</button>
                        </div>
                    </div>
                    <div>
                        <Upload id={info.id} mode='image'></Upload>
                    </div>
                </div>
            </div>  
            
            )
    }
}

export default ProfilePhoto