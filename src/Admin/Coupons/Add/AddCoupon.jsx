import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const AddCoupon = () => {

  const [name, setName] = useState('')
  const [off, setOff] = useState('')
  const [duration, setDuration] = useState('')

  const createCoupon = async (e) => {
    e.preventDefault()
    const coupon = await axios.post(`http://localhost:5000/createCoupon` , {name , off , duration})
    alert("submitted")
    console.log(coupon);
  }


  return (
    <>
      <Container>
        <Form onSubmit={(e)=>createCoupon(e)}>
          <Row>
            <Col>
              <h4 >Add Coupon</h4>
              <div className='detailsBody'>
                <div>
                  <span style={{ fontWeight: "bold" }}>Details</span>
                </div>
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Coupon Name"
                    className="mb-3"
                  >
                    <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="name@example.com" />
                  </FloatingLabel>
                </div>
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="%OFF"
                    className="mb-3"
                  >
                    <Form.Control onChange={(e)=>setOff(e.target.value)} type="number" placeholder="name@example.com" />
                  </FloatingLabel>
                </div>
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Duration"
                    className="mb-3"
                  >
                    <Form.Control onChange={(e)=>setDuration(e.target.value)} type="number" placeholder="name@example.com" />
                  </FloatingLabel>
                </div>
              </div>
            </Col>
            <Col>
              <div className='btnBody'>
                <Button className='button' type='submit' variant="success">Create Coupon</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default AddCoupon