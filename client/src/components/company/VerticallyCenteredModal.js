import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Document, Page } from 'react-pdf';
import { getProfile } from '../UserFunctions'



export default class VerticallyCenteredModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        getProfile(this.props.id).then(response => {

            if (response) {
                this.setState({
                    url: '/uploads/user/resume/' + response.user_contact.resume
                })
                console.log('/uploads/user/resume/' + response.user_contact.resume)
            }
        })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 href={this.state.url}>Resume</h4>
                    <Document file={this.state.url}>
                    </Document>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

// class VerticallyCenteredModal extends Component {

//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Modal heading
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>

//                 <h4>Resume</h4>
//                 <div>
//                     {

//                     }
//                     <Document file="">
//                         <Page pageNumber='1' />
//                     </Document>
//                 </div>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={props.onHide}>Close</Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }
