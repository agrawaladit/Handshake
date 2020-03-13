import React from 'react'
import {Button, Container} from 'react-bootstrap'
import VerticallyCenteredModal from './VerticallyCenteredModal'


function MyModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <Container {...props}>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          View Resume
        </Button>
  
        <VerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          id = {props.id}
        />
      </Container>
    );
  }

  export default MyModal