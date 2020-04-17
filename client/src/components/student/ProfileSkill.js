import React, { Component } from 'react'

class ProfileSkill extends Component {
    state = { 
        skills : [],
        tempSkill : ''
    }
    
    handleChange =(e) => {
        this.setState({
            tempSkill : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        const skills = [...this.state.skills, this.state.tempSkill]
        this.setState({
            skills : skills,
            tempSkill: ''
        })
    }

    handleDelete =(e) => {
        const skills = this.state.skills.filter(item => item !== e.target.value)
        this.setState({
            skills : skills
        })
    }
    
    render() {
        const skills = this.state.skills.map(skill => {
            return(
                <div className='mar-btm-small d-flex' key={skill}>
                    <div>
                        {skill}
                    </div>
                    <div className='ml-auto'>
                        <button type="button" class="btn btn-secondary btn-sm btn-danger" value={skill} onClick={this.handleDelete}>X</button>
                    </div>
                </div>
            )
        })
        return (
            <div className='cotainer card col-md-12 mar-btm pad-all'>
                {skills}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.tempSkill} placeholder="Add Skills" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.handleChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileSkill