import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, getAllUsers } from '../../actions/userAction'
import { Table } from 'react-bootstrap'
import Loader from '../loader'
import Error from '../Error'
import { AiTwotoneDelete } from "react-icons/ai"

const UserList = () => {
    const userState = useSelector((state) => state.getAllUsersReducer)
    const { loading, error, users } = userState
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch]);

    return (
        <div>
            <h2>Users List</h2>
            {loading && (<Loader />)}
            {error && (<Error error="Somethings went wrong" />)}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td> <AiTwotoneDelete style={{ color: 'red', cursor: 'pointer' }}
                                onClick={() => { dispatch(deleteUser(user._id)) }} /></td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </div>
    )
}

export default UserList
