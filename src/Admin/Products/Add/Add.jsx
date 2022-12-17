import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import "./Add.scss"
import axios from 'axios'
import { useState } from 'react'

const Add = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [model, setModel] = useState('')
    const [origAmt, setOrigAmt] = useState('')
    const [off, setOff] = useState('')
    const [quantity, setQuantity] = useState('')
    const [linkOne, setLinkOne] = useState('')
    const [linkTwo, setLinkTwo] = useState('')
    const [linkThree, setLinkThree] = useState('')
    const [linkFour, setLinkFour] = useState('')


    const addProduct = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/addProduct', {
            name: name,
            description: description,
            price: price,
            model: model,
            originalAmount: origAmt,
            off: off,
            quantity: quantity,
            imgOne: linkOne,
            imgTwo: linkTwo,
            imgThree: linkThree,
            imgFour: linkFour
        }).then((res) => {
            console.log(res.data);
        })

        alert("submitted")
        window.location.reload(false); //page refresh
    }


    return (
        <>
            <Container>
                <Form onSubmit={addProduct}>
                    <Row>
                        <Col md={6}>
                            <Container>
                                <div style={{ marginTop: "40px" }}>
                                    <h1 style={{ fontWeight: "bold" }}>Add Product</h1>
                                </div>
                                <div style={{ marginTop: "30px" }}>
                                    <div>
                                        <span style={{ fontWeight: "bold" }}>Details</span>
                                    </div>
                                    <div>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Name(Required)"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div>
                                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Price(Required)"
                                            className="mb-3"
                                            onChange={(e) => setPrice(e.target.value)}
                                        >
                                            <Form.Control type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Model"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setModel(e.target.value)} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Original Amount"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setOrigAmt(e.target.value)} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="% Off"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setOff(e.target.value)} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    {/* <div className='fileUpload'>
                                        <label id='body'>
                                            <Image />
                                            <span>Upload Image(s)</span>
                                            <input className='file' type="file" multiple />
                                        </label>
                                    </div> */}

                                </div>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <Container>
                                <div style={{marginTop:"24.3%"}}>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Quantity"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setQuantity(e.target.value)} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div>
                                        <span style={{fontWeight:"bold"}}>Images</span>
                                    </div>
                                    <div style={{ marginTop: "10px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="image link 1"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setLinkOne(e.target.value)} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="image link 2"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setLinkTwo(e.target.value)} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="image link 3"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setLinkThree(e.target.value)} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="image link 4"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setLinkFour(e.target.value)} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div className='btnBody'>
                                        <Button className='button' type='submit' variant="success">Save Changes</Button>
                                    </div>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default Add