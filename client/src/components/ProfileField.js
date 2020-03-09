import React, { Component } from 'react'
import { Card, Button, Row } from 'react-bootstrap'

class ProfileField extends Component {
    state = {
        subtitle: this.props.t2,
        id: this.props.id,
        f1: this.props.f1,
        f2: this.props.f2,
        f3: this.props.f3,
        f4: this.props.f4,
        f5: this.props.f5,
        f6: this.props.f6,
        disable: true,
        inputClass: 'border-0 mb-2 text-muted',
        descClass: 'border-0 mb-0',
        buttonName: 'Edit'
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            subtitle: nextProps.t2,
            id: nextProps.id,
            f1: nextProps.f1,
            f2: nextProps.f2,
            f3: nextProps.f3,
            f4: nextProps.f4,
            f5: nextProps.f5,
            f6: nextProps.f6,
        })
        console.log(this.state)
    }
    

    handleClick = e => {
        this.setState({
            inputClass: this.state.disable ? 'mb-2 text-muted' : 'border-0 mb-2 text-muted',
            descClass: this.state.disable ? 'mb-2' : 'border-0 mb-2',
            buttonName: this.state.disable ? 'Save' : 'Edit',
            disable: !this.state.disable
        })
        this.state.disable ? console.log('edit mode on') : this.props.todo(this.state);
    }

    handleSubtitle = e => {
        this.setState({
            subtitle: e.target.value,
        })
    }

    handleDescription = e => {
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
                    <input type="text" disabled={this.state.disable} value={this.state.subtitle} className={this.state.inputClass} onChange={this.handleSubtitle} placeholder={ph.subtitle} />
                    <Card.Text>
                        <input type="text" name="f1" disabled={this.state.disable} value={this.state.f1} className={this.state.descClass} onChange={this.handleDescription} placeholder={ph.f1}/><br />
                        {"Start Date: "}<input type="date" name="f5" disabled={this.state.disable} value={this.state.f5} className={this.state.descClass} onChange={this.handleDescription}/>
                        {"End Date: "}<input type="date" name="f6" disabled={this.state.disable} value={this.state.f6} className={this.state.descClass} onChange={this.handleDescription} /><br />
                        <input type="text" name="f2" disabled={this.state.disable} value={this.state.f2} className={this.state.descClass} onChange={this.handleDescription} placeholder={ph.f2}/><br />
                        <input type="text" name="f3" disabled={this.state.disable} value={this.state.f3} className={this.state.descClass} onChange={this.handleDescription} placeholder={ph.f3}/><br />
                        <input type="text" name="f4" disabled={this.state.disable} value={this.state.f4} className={this.state.descClass} onChange={this.handleDescription} placeholder={ph.f4}/>
                    </Card.Text>
                    <Button onClick={this.handleClick}>{this.state.buttonName}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProfileField