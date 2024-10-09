import React from 'react'
import { Container, Row, Col, Table, Image } from 'react-bootstrap';
import { AiFillMail, AiOutlineMobile } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';


const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={6}>
                        <h1>Techinfo YT Pizza Shop</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique optio voluptatibus labore, placeat praesentium aliquid assumenda. Commodi animi veritatis architecto deserunt debitis ut sunt sequi dignissimos ad voluptate. Fugit quo dignissimos ut natus voluptatum vitae, reiciendis voluptatibus cum, incidunt, eveniet veniam labore omnis laboriosam molestias neque. Ad aut vero fugit beatae illo necessitatibus optio asperiores omnis ea. Ducimus voluptatem voluptatibus quia ipsa fuga. Consequatur nobis omnis eaque rerum obcaecati temporibus, odit, doloribus ipsam porro eum dolores. Commodi minima pariatur perspiciatis, id atque a corrupti voluptas iusto eos, ipsum, vitae quisquam esse voluptate fugit odit dicta ex sapiente maiores unde?</p>
                        <Table striped bordered hover className='text-center'>
                            <thead>
                                <tr>
                                    <th className='bg-warning text-center' colSpan={4}>---Contact Details---</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><AiOutlineMobile /></td>
                                    <td>Phone</td>
                                    <td>0123456789</td>
                                </tr>
                                <tr>
                                    <td> <BiPhoneCall /></td>
                                    <td>Call</td>
                                    <td>012-56789</td>
                                </tr>
                                <tr>
                                    <td><AiFillMail /></td>
                                    <td>Email</td>
                                    <td>name@yourdomain.com</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Image src='images/farmhouse.jpg' style={{}} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact
