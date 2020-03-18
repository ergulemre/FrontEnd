import React,{Component} from 'react';
import {Modal,Button,Row,Form,Col} from 'react-bootstrap';

export class AddRestModal extends Component{

    constructor(props){
        super(props);
    }

    handleSubmit(event){
        event.preventDefault();
        alert(event.target.RestaurantName.value);
    }

    render(){
        return(
                <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Rest
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <Row>
                                <Col sm={6}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="RestaurantName">
                                            <Form.Label>RestaurantName</Form.Label>
                                            <Form.Control type="text" name="RestaurantName" required
                                            placeholder="RestaurantName"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Button variant="primary" type="submit">
                                                Add
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>      
        )
    }
}