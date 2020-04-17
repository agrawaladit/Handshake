import React, { Component } from 'react'
import Profile from '../../profile.png'
import Upload from '../Upload'
import { Link, withRouter } from 'react-router-dom'

class ProfilePhoto extends Component {
    state = {
        profile: Profile,
        info: '',
        education: {},
        experience: {},
        contact: {},
        id: ''
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            info: nextProps.state,
            education: nextProps.state.education || {},
            experience: nextProps.state.experience || {},
            contact: nextProps.state.contact || {},
            id: nextProps.state.id
        })
    }


    render() {
        const info = this.props.state
        var profile = this.state.profile
        try {
            profile = info.contact.image ? ('/uploads/user/image/' + info.contact.image) : this.state.profile
            console.log(profile);
        }
        catch (err) { }

        return (
            <div className="col-md-12 card mar-btm">
                <div className="panel text-center">
                    <div className="panel-body">
                        <img alt="Avatar" className="img-l img-circle img-border mar-btm img-fluid rounded-circle" src={profile} />
                        <h4 className="mar-no">{info.first_name} {info.last_name}</h4>
                        <p>{info.school}</p>
                    </div>
                    <div>
                        <p className="text-muted">
                            {this.state.education.major}
                        </p>
                        <div className="pad-btm">
                            <Link  to={`/messages/${'Ralph Lauren'}`} className="nav-link">
                            <button className="btn btn-success" value={info.first_name}>Message</button>
                            </Link>
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

export default withRouter(ProfilePhoto)