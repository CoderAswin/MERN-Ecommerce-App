import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Update = () => {

    const { id } = useParams() //parse id from url


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

    useEffect(() => {

        axios.get(`http://localhost:5000/getProducts/${id}`).then((res) => {
           setName(res.data.name);
           setDescription(res.data.description)
           setPrice(res.data.price)
           setModel(res.data.model)
           setOrigAmt(res.data.originalAmount)
           setOff(res.data.off)
           setQuantity(res.data.quantity)
           setLinkOne(res.data.images.imgOne)
           setLinkTwo(res.data.images.imgTwo)
           setLinkThree(res.data.images.imgThree)
           setLinkFour(res.data.images.imgFour)

       })

   }, [])



    const updateProduct = (e) => {
        e.preventDefault()
        alert("submitted")
        axios.post(`http://localhost:5000/updateProduct/${id}`, {
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
            console.log(res);
        })

        
    }




    return (
        <>
            <Container>
                <Form onSubmit={updateProduct} >
                    <Row>
                        <Col md={6}>
                            <Container>
                                <div style={{ marginTop: "40px" }}>
                                    <h1 style={{ fontWeight: "bold" }}>Update Product</h1>
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
                                            <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div>
                                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                                onChange={(e) => setDescription(e.target.value)}
                                                value={description}

                                            />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Price(Required)"
                                            className="mb-3"


                                        >
                                            <Form.Control onChange={(e) => setPrice(e.target.value)} value={price} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Model"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setModel(e.target.value)} value={model} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Original Amount"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setOrigAmt(e.target.value)} value={origAmt} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="% Off"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setOff(e.target.value)} value={off} type="text" placeholder="name@example.com" />
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
                                <div style={{ marginTop: "24.3%" }}>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Quantity"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setQuantity(e.target.value)} value={quantity} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div>
                                        <span style={{ fontWeight: "bold" }}>Image Links</span>
                                    </div>
                                    <div style={{ marginTop: "10px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="image link 1"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setLinkOne(e.target.value)} value={linkOne} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="image link 2"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setLinkTwo(e.target.value)} value={linkTwo} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="image link 3"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setLinkThree(e.target.value)} value={linkThree} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="image link 4"
                                            className="mb-3"
                                        >
                                            <Form.Control onChange={(e) => setLinkFour(e.target.value)} value={linkFour} type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </div>
                                    <div className='btnBody'>
                                        <Button className='button' type='submit' variant="success">Update Changes</Button>
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

export default Update