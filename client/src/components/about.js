import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const About = () => {
  return (
    <>
      <Container style={{ marginTop: '50px' }}>
        <h1>Who we are</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique optio voluptatibus labore, placeat praesentium aliquid assumenda. Commodi animi veritatis architecto deserunt debitis ut sunt sequi dignissimos ad voluptate. Fugit quo dignissimos ut natus voluptatum vitae, reiciendis voluptatibus cum, incidunt, eveniet veniam labore omnis laboriosam molestias neque. Ad aut vero fugit beatae illo necessitatibus optio asperiores omnis ea. Ducimus voluptatem voluptatibus quia ipsa fuga. Consequatur nobis omnis eaque rerum obcaecati temporibus, odit, doloribus ipsam porro eum dolores. Commodi minima pariatur perspiciatis, id atque a corrupti voluptas iusto eos, ipsum, vitae quisquam esse voluptate fugit odit dicta ex sapiente maiores unde?</p>
        <h1>Our Speciallity</h1>
        <Row>
          <Col md={6}>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo aliquam nulla error pariatur tempore laborum provident quos ut blanditiis, nesciunt dicta iusto repudiandae deserunt officiis similique ipsum perspiciatis doloremque in incidunt esse. Tempore repellendus similique temporibus dicta illo modi consequuntur rerum, debitis dolore explicabo iste quam, eum optio eligendi?
            </p>
          </Col>
          <Col md={6}>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo aliquam nulla error pariatur tempore laborum provident quos ut blanditiis, nesciunt dicta iusto repudiandae deserunt officiis similique ipsum perspiciatis doloremque in incidunt esse. Tempore repellendus similique temporibus dicta illo modi consequuntur rerum, debitis dolore explicabo iste quam, eum optio eligendi?
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our cheif</h1>
          <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi commodi dolores iure fugit quo doloribus praesentium velit sequi officia quaerat illum, ipsam, error similique?</Col>
          <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi commodi dolores iure fugit quo doloribus praesentium velit sequi officia quaerat illum, ipsam, error similique?</Col>
          <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi commodi dolores iure fugit quo doloribus praesentium velit sequi officia quaerat illum, ipsam, error similique?</Col>
          <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi commodi dolores iure fugit quo doloribus praesentium velit sequi officia quaerat illum, ipsam, error similique?</Col>

        </Row>
      </Container>
    </>
  )
}

export default About
