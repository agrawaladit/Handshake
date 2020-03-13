import React from 'react'
import {Button,FormControl,Form} from 'react-bootstrap'
const axios = require("axios");

export default class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            id: '',
            mode: ''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id,
            mode: nextProps.mode
        })
    }

    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        formData.append('id',this.state.id);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const direction = "/upload/" + this.state.mode
        axios.post(direction,formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <FormControl type="file" name="myImage" onChange= {this.onChange}/>
                <br/>
                <Button type="submit">Upload</Button>
            </Form>
        )
    }
}