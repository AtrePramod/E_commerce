import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { MdLocalOffer } from 'react-icons/md'


const ToolBar = () => {
    return (
        <>
            <Navbar bg="dark" varient="dark" expand="lg">
                <Container fluid >
                    <h6 className='text-light'>
                        <MdLocalOffer className='text-warning' />&nbsp;&nbsp;
                        Free Home Delivery on Order Above 500/- Rupees</h6>

                    <Nav className="ms-auto " >

                        <LinkContainer to="/" activeClassName>
                            <Nav.Link className='text-light'>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/about" activeClassName>
                            <Nav.Link className='text-light'>About</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contact" activeClassName>
                            <Nav.Link className='text-light'>Contact Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/policy" activeClassName>
                            <Nav.Link className='text-light'>terms and policy</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default ToolBar;
