import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import "./AddCustomer.scss"

const AddCustomer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4 >Add Customer</h4>
                        <div className='detailsBody'>
                            <div>
                                <span style={{fontWeight:"bold"}}>Details</span>
                            </div>
                            <div>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="First Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="EMail Address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Phone Number"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='btnBody'>
                            <Button className='button' variant="success">Save Changes</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddCustomer