import React from 'react'
import { Card, Accordion, Button, FormControl, Form } from 'react-bootstrap'
const axios = require("axios");

export default class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            id: '',
            mode: '',
            func: ''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id,
            mode: nextProps.mode,
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.f()
        const formData = new FormData();
        formData.append('myImage', this.state.file);
        formData.append('id', this.state.id);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const direction = "/upload/" + this.state.mode
        axios.post(direction, formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] });
    }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit} className="pad-all">
                <Card style={{width: '100px'}}>
                    <FormControl type="file" name="myImage" onChange={this.onChange} />
                    <Button variant="secondary" type="submit" >Apply</Button>
                </Card>
            </Form>
        )
    }
}