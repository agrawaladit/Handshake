import React, { Component } from 'react'
import { Card, Button, Row , Container} from 'react-bootstrap'

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
        g1: "",
        g2: "",
        g3: "",
        g4: "",
        g5: "",
        g6: "",
        g7: "",
        g8: "",
        disable: true,
        inputClass: 'border-0 mb-2 text-muted',
        descClass: 'border-0 mb-0',
        buttonName: 'Edit'
    }

    componentWillReceiveProps(props) {
        this.setState({
            subtitle: props.t2,
            id: props.id,
            f1: props.f1,
            f2: props.f2,
            f3: props.f3,
            f4: props.f4,
            f5: props.f5,
            f6: props.f6,
            g1: props.g1
        })
    }
    

    handleClick = e => {
        this.setState({
            inputClass: this.state.disable ? 'mb-2 text-muted' : 'border-0 mb-2 text-muted',
            descClass: this.state.disable ? 'mb-0' : 'border-0 mb-0',
            buttonName: this.state.disable ? 'Save' : 'Edit',
            disable: !this.state.disable
        })
        console.log(this.state);
        
        this.state.disable ? console.log('edit mode on') : this.props.todo(this.state);
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }


    render() {
        const ph = {
            subtitle: this.props.eduComp ? "School" : "Company Name" ,
            f1: this.props.eduComp ? "Degree" : "Title" ,
            f2: "Location",
            f3: this.props.eduComp ? "Major" : "Duration" ,
            f4: this.props.eduComp ? "CGPA" : "Description"
        }
        return (
            <Container>
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
                </Card.Body>
            </Card>
            <Card style={{ width: '100%' }} className="mar-btm" >
                <Card.Body>
                    <Card.Title>{this.props.g1}</Card.Title>
                    <input type="text" name="g8" disabled={this.state.disable} value={this.state.g8} className={this.state.inputClass} onChange={this.handleChange} placeholder={ph.subtitle} />
                    <Card.Text>
                        <input type="text" name="g7" disabled={this.state.disable} value={this.state.g7} className={this.state.descClass} onChange={this.handleChange} placeholder={ph.f1}/><br />
                        {"Start Date: "}<input type="date" name="g5" disabled={this.state.disable} value={this.state.g5} className={this.state.descClass} onChange={this.handleChange}/>
                        {"End Date: "}<input type="date" name="g6" disabled={this.state.disable} value={this.state.g6} className={this.state.descClass} onChange={this.handleChange} /><br />
                        <input type="text" name="g2" disabled={this.state.disable} value={this.state.g2} className={this.state.descClass} onChange={this.handleChange} placeholder={ph.f2}/><br />
                        <input type="text" name="g3" disabled={this.state.disable} value={this.state.g3} className={this.state.descClass} onChange={this.handleChange} placeholder={ph.f3}/><br />
                        <input type="text" name="g4" disabled={this.state.disable} value={this.state.g4} className={this.state.descClass} onChange={this.handleChange} placeholder={ph.f4}/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button variant="secondary" onClick={this.handleClick} className="mar-rt mar-btm">{this.state.buttonName}</Button>
            <Button variant="secondary" className="mar-rt mar-btm">Add</Button>
            </Container>
        )
    }
}

export default ProfileField