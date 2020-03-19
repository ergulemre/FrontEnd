import React,{Component} from 'react';
import {Modal,Button,Row,Form,Col} from 'react-bootstrap';

export class AddRestModal extends Component{


    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44395/api/Restaurants',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                RestaurantID:null,
                RestaurantName:event.target.RestaurantName.value,
                RestaurantAdress:event.target.RestaurantAdress.value
            })

        })
        .then(res=> res.json())
        .then((result)=>
        {
            alert(result);
        },
        (error)=>{
            alert('Failed')
        }
        )
        //alert(event.target.RestaurantName.value);
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
                                            <Form.Label>Restaurant Name</Form.Label>
                                            <Form.Control type="text" name="RestaurantName" required
                                            placeholder="Restaurant Name"/>
                                        </Form.Group>
                                        <Form.Group controlId="RestaurantAdress">
                                            <Form.Label>Restaurant Adress</Form.Label>
                                            <Form.Control type="text" name="RestaurantAdress" required
                                            placeholder="Restaurant Adress"/>
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