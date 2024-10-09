import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { filterPizza } from '../actions/pizzaAction'

const Filters = () => {
    const [searchKey, setSearchKey] = useState("");
    const [category, setCategory] = useState("all")
    const dispatch = useDispatch();
    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Control type="text"
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            placeholder="Search Pizza" />

                    </Col>
                    <Col>
                        <select class='form-select' value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>All</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non-veg</option>
                        </select>

                    </Col>
                    <Col>
                        <Button onClick={() => { dispatch(filterPizza(searchKey, category)) }}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Filters
