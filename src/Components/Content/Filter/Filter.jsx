import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import "./Filter.scss"

const Filter = () => {
    return (
        <div className='filter'>
            <Row>
                <Col>
                    <div>
                        <div>
                            <h5>Categories</h5>
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="T-shirts" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Lounge T-shirts" />
                            </Form.Group>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <h5>Brand</h5>
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Roadster" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Kalt" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Friskers" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="WRONG" />
                            </Form.Group>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <h5>Price</h5>
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Rs. 174 to Rs. 2378" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Rs. 2378 to Rs. 4582" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Rs. 4582 to Rs. 6786" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Rs. 6786 to Rs. 8990" />
                            </Form.Group>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Filter