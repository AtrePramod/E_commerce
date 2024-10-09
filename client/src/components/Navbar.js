import React from 'react'
import { Container, Navbar, Nav, Image, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/userAction';
const NavBar = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand > <Image src="images/logo.png" style={{ height: "50px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                currentUser ? (
                                    <>
                                        {/* <Nav.Link  >{currentUser.name}</Nav.Link> */}
                                        <Dropdown Dropdown >
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                {currentUser.name}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <LinkContainer to="/orders">
                                                    <Dropdown.Item  >Order</Dropdown.Item>
                                                </LinkContainer>

                                                <Dropdown.Item onClick={() => dispatch(logoutUser())}>Logout</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </>

                                ) : (
                                    <>
                                        <LinkContainer to="/login">
                                            <Nav.Link  >Login</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/register">
                                            <Nav.Link  >Register</Nav.Link>
                                        </LinkContainer>
                                    </>)
                            }

                            <LinkContainer to="/cart">
                                <Nav.Link  >Cart {cartState.cartItems.length}</Nav.Link>

                            </LinkContainer>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}

export default NavBar;
