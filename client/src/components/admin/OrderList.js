import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deliverOrders, getAllOrders } from '../../actions/orderAction';
import Loader from '../loader'
import Error from '../Error'
import { Button, Table } from 'react-bootstrap';

const OrderList = () => {
    const gettAllUserState = useSelector((state) => state.allUserOrdersReducer);
    const { loading, orders, error } = gettAllUserState;
    const dispatch = useDispatch();;
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])
    return (
        <div>
            <h2>Order List</h2>

            {loading && (<Loader />)}
            {error && (<Error error="Somethings else" />)}
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order.email}</td>
                            <td>{order.email}</td>
                            <td>{order._id}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>{order.isDelivered ?
                                (<h6 className='text-success'>Delivered</h6>)
                                :
                                (<Button
                                    className='btn-danger'
                                    onClick={() => { dispatch(deliverOrders(order._id)) }}
                                >Deliver</Button>)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </div>
    )
}

export default OrderList
