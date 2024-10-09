import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { getPizzaById, updatePizza } from '../../actions/pizzaAction'
import Loader from '../loader'
import Error from '../Error'
import Success from '../Success'


const EditPizza = ({ match }) => {
    const [name, setName] = useState('');
    const [smallPrice, setSmallPrice] = useState();
    const [largePrice, setLargePrice] = useState();
    const [mediumPrice, setMediumPrice] = useState();
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [cate, setCate] = useState('');
    const dispatch = useDispatch()
    const getPizzaByState = useSelector((state) => state.editPizzaByIdReducer);
    const { loading, error, pizza } = getPizzaByState;
    const updatePizzaState = useSelector((state) => state.updatePizzaByIdReducer);
    const { updateloading, updaterror, updatesuccess } = updatePizzaState;

    useEffect(() => {
        if (pizza) {
            if (pizza._id === match.params.pizzaId) {
                setName(pizza.name);
                setCate(pizza.category);
                setDesc(pizza.description);
                setImage(pizza.image);
                setLargePrice(pizza.prices[0]['large']);
                setMediumPrice(pizza.prices[0]['medium']);
                setSmallPrice(pizza.prices[0]['small']);
            }
            else {

                dispatch(getPizzaById(match.params.pizzaId));
            }
        }
        else {
            dispatch(getPizzaById(match.params.pizzaId));

        }
    }, [pizza, dispatch]);

    const submitForm = (e) => {
        e.preventDefault();
        const updatedPizza = {
            _id: match.params.pizzaId,
            name, image, desc, cate, prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        };
        dispatch(updatePizza(updatedPizza));
    };
    return (
        <div>
            {loading && (<Loader />)
            }
            {updateloading && (<Loader />)
            }
            {error && (<Error error="Some Thing went wrong " />)
            }

            <Form onSubmit={submitForm}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
                        />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPrice1">
                            <Form.Label>Small Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={smallPrice}
                                onChange={(e) => setSmallPrice(e.target.value)}
                                placeholder="Enter smallPrice"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrice2">
                            <Form.Label>Medium Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={mediumPrice}
                                onChange={(e) => setMediumPrice(e.target.value)}
                                placeholder="Enter mediumPrice"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrice3">
                            <Form.Label>large Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={largePrice}
                                onChange={(e) => setLargePrice(e.target.value)}
                                placeholder="Enter LargePrice"
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridImage">
                        <Form.Label> Image URL </Form.Label>
                        <Form.Control type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Enter Image URL"
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Enter Description"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" value={cate}
                        onChange={(e) => setCate(e.target.value)}
                        placeholder="Enter Category" />
                </Form.Group>


                <Button variant="primary" type='submit' >
                    Update Pizza
                </Button>
            </Form>
        </div >
    )
}

export default EditPizza
