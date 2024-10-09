import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillMinusCircle, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai'
import { addToCard, deleteFromCart } from '../actions/cardAction'
//import CheckOut from '../components/CheckOut'
import { placeOrders } from "../actions/orderAction"

const CardScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    const buttonHandler = () => {
        dispatch(placeOrders(subTotal));
    }

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>My Cart Items</h1>
                        <Row> {
                            cartItems.map(item => (
                                <>
                                    <hr />
                                    <Col md={7}>
                                        <h5>{item.name} [{item.varinet}]</h5>
                                        <h6>
                                            Price:{item.quantity}*{item.prices[0][item.varinet]}={" "}{item.price}
                                        </h6>
                                        <h6>Quantity: &nbsp;
                                            <AiFillMinusCircle className='text-danger' style={{ cursor: 'pointer' }}
                                                onClick={() => { dispatch(addToCard(item, item.quantity - 1, item.varinet)); }}
                                            />&nbsp;&nbsp;
                                            {item.quantity}&nbsp; &nbsp;
                                            <AiFillPlusCircle className='text-success' style={{ cursor: 'pointer' }}
                                                onClick={() => { dispatch(addToCard(item, item.quantity + 1, item.varinet)); }}
                                            /></h6 >
                                    </Col>
                                    <Col md={5}>
                                        <img alt={item.name} src={item.image} style={{ width: '80px', height: '60px' }} />
                                        <AiFillDelete className='text-danger' style={{ cursor: 'pointer' }}
                                            onClick={() => { dispatch(deleteFromCart(item)); }} />
                                    </Col>

                                </>
                            ))
                        }
                        </Row>
                    </Col>
                    <Col md={2}>
                        <h1>Payment Info</h1>
                        <h4>Sub Total</h4>
                        <h4>Rs : {subTotal} /-</h4>
                        <Button onClick={buttonHandler}>CheckOut</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CardScreen;
