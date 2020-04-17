import React, { Component } from 'react'
import { Modal, Button ,Card} from 'react-bootstrap'
import Resume from '../../Resume.png'



export default class VerticallyCenteredModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
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
                        Resume
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card.Img variant="top" src={Resume} style={{ height: '200px' }} />
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
