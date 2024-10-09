import React, { useState } from 'react'
import { Button, Card, Row, Col, Modal } from 'react-bootstrap'
import { FaRupeeSign, FaAudioDescription } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCard } from '../actions/cardAction'

const Pizza = ({ pizza }) => {
    const [varient, setVaritent] = useState('small');
    const [qauantity, setQauantity] = useState(1);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    const addToCardHandler = () => {
        dispatch(addToCard(pizza, qauantity, varient))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        < >
            <Card style={{ width: '18rem', marginTop: '20px', cursor: 'pointer' }}>
                <Card.Img variant="top" src={pizza.image}
                    onClick={handleShow} />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <h6> Varients</h6>
                                <select value={varient} onChange={e => setVaritent(e.target.value)}>
                                    {pizza.varients.map((varients) => (
                                        <option>{varients}</option>
                                    ))
                                    }
                                </select>
                            </Col>
                            <Col md={6}>
                                <h6>Quantity </h6>
                                <select value={qauantity} onChange={e => setQauantity(e.target.value)}>
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Row>
                        <Col md={6}>Price : {pizza.prices[0][varient] * qauantity} <FaRupeeSign /></Col>
                        <Col md={6}>
                            <Button onClick={addToCardHandler} className='bg-success text-white'>Add to cart</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/*model*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Card.Img variant="top" src={pizza.image}
                        />
                    </div>
                    <div>
                        <h5><FaAudioDescription /></h5>
                        <h6>
                            {pizza.description}
                        </h6>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Pizza
