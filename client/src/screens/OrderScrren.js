import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserOrders } from '../actions/orderAction'
import Loader from '../components/loader'
import Error from '../components/Error'
import { Col, Container, Row } from 'react-bootstrap'


const OrderScrren = () => {
  const orderState = useSelector(state => state.getUserOrdersReducer)
  const { loading, error, orders } = orderState
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserOrders())
  }, [dispatch])

  return (
    <>
      <h2>OrderScrren</h2>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {orders ? orders.map((order) => (
        <Row>
          <Col md={4}>
            {order.orderItems.map((item) => (
              <Container >
                <h6 key={item.name}>
                  {item.name}  {item.varient}*{item.quantity}={item.price}
                </h6>
              </Container>
            ))}
          </Col>
          <Col md={4}>
            <h4>Address</h4>
            <h6>Street:{order.shippingAddress.street}</h6>
            <h6>City:{order.shippingAddress.city}</h6>
            <h6>PinCode:{order.shippingAddress.picode}</h6>
            <h6>Country:{order.shippingAddress.country}</h6>
          </Col>
          <Col md={4}>
            <h4>OrderInfo</h4>
            <h6>Order Amount:{order.orderAmount}</h6>
            <h6>Transection id: {order.transectionId}</h6>
            <h6>Order id:  {order._id}</h6>
          </Col>
        </Row>
      )) : (<Error error="Something went wrong  pramod atre" />)}
    </>
  )
}

export default OrderScrren;
