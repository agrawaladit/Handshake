import React, { Component } from 'react'
import { Card, Button, Row } from 'react-bootstrap'

class ProfileField extends Component {
    state = {
        subtitle: "",
        id: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        disable: true,
        inputClass: 'border-0 mb-2 text-muted',
        descClass: 'border-0 mb-0',
        buttonName: 'Edit'
    }

    static getDerivedStateFromProps(props, state) {
        return {
            subtitle: props.t2,
            id: props.id,
            f1: props.f1,
            f2: props.f2,
            f3: props.f3,
            f4: props.f4,
            f5: props.f5,
            f6: props.f6,
        }
    }
    

    handleClick = e => {
        this.setState({
            inputClass: this.state.disable ? 'mb-2 text-muted' : 'border-0 mb-2 text-muted',
            descClass: this.state.disable ? 'mb-0' : 'border-0 mb-0',
            buttonName: this.state.disable ? 'Save' : 'Edit',
            disable: !this.state.disable
        })
        this.state.disable ? console.log('edit mode on') : this.props.todo(this.state);
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }


    render() {
        const ph = {
            subtitle: this.props.eduComp ? "Add School" : "Add Company Name" ,
            f1: this.props.eduComp ? "Add Degree" : "Add Title" ,
            f2: "Add Location",
            f3: this.props.eduComp ? "Add Major" : "Add Duration" ,
            f4: this.props.eduComp ? "Add CGPA" : "Add Description"
        }
        return (
            <Card style={{ width: '100%' }} className="mar-btm" >
                <Card.Body>
                    <Card.Title>{this.props.t1}</Card.Title>
                    <input type="text" name="subtitle" disabled={this.state.disable} value={this.state.subtitle} className={this.state.inputClass} onChange={this.handleChange} placeholder={ph.subtitle} />
                    <Card.Text>
                        <input type="text" name="f1" disabled={this.state.disable} value={this.state.f1} className={this.state.descClass} onChange={this.handleChange} placeholder={ph.f1}/><br />
                        {"Start Date: "}<input type="date" name="f5" disabled={this.state.disable} value={this.state.f5} className={this.state.descClass} onChange={this.handleChange}/>
                        {"End Date: "}<input type="date" name="f6" disabled={this.state.disable} value={this.state.f6} className={this.state.descClass} onChange={this.handleChange} /><br />
                        <input type="text" name="f2" disabled={this.state.disable} value={this.state.f2} className={this.state.descClass} onChange={this.handleChange} placeholder={ph.f2}/><br />
                        <input type="text" name="f3" disabled={this.state.disable} value={this.state.f3} className={this.state.descClass} onChange={this.handleChange} placeholder={ph.f3}/><br />
                        <input type="text" name="f4" disabled={this.state.disable} value={this.state.f4} className={this.state.descClass} onChange={this.handleChange} placeholder={ph.f4}/>
                    </Card.Text>
                    <Button onClick={this.handleClick}>{this.state.buttonName}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProfileField