import "./Edit.scss"
import { Form, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const Edit = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [addressOne, setAddressOne] = useState('')
    const [addressTwo, setAddressTwo] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')


    const { userid } = useParams()

    useEffect(() => {

        const editAcc = async () => {
            let getUserById = await axios.get(`http://localhost:5000/getUserById/${userid}`)
            // console.log(getUserById);
            let { data: { userInfo: { firstName, lastName, phoneNumber } } } = getUserById
            let {data:{address}} = getUserById
            setFirstName(firstName)
            setLastName(lastName)
            setPhoneNumber(phoneNumber)
            setAddressOne(address.addressOne)
            setAddressTwo(address.addressTwo)
            setCity(address.city)
            setZip(address.zip)
        }

        editAcc()

    }, [])

    const saveAddress = async (e) => {
        e.preventDefault()

        const getAddress = await axios.post(`http://localhost:5000/getAddress/${userid}`,
            {
                addressOne, addressTwo, city, state, zip
            })
        console.log(getAddress);
        alert("address Saved")
    }


    return (
        <div className="editBody">
            <div className="edit">
                <div>
                    <span style={{ fontWeight: "bold" }}>Save User Details</span>
                    <hr />
                </div>
                <div>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" placeholder="First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Row>

                        <div className="radio">
                            <label htmlFor="">Gender:</label>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                        </div>
                        <div className="mobile">
                            <div>
                                <span>Mobile Number</span>
                            </div>
                            <div>
                                <span>{phoneNumber}</span>
                            </div>
                        </div>
                        <div className="buttons">
                            <button>Save Details</button>
                            <button>Update Phone Number</button>
                        </div>
                    </Form>

                    <div className="address">
                        <div>
                            <span style={{ fontWeight: "bold" }}>Address Details</span>
                            <hr />
                        </div>
                        <div>
                            <Form onSubmit={(e) => saveAddress(e)}>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address 1</Form.Label>
                                    <Form.Control onChange={(e) => setAddressOne(e.target.value)} value={addressOne} placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control onChange={(e) => setAddressTwo(e.target.value)} value={addressTwo} placeholder="Apartment, studio, or floor" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control onChange={(e) => setCity(e.target.value)} value={city} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select onChange={(e) => setState(e.target.value)} defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Kerala</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control onChange={(e) => setZip(e.target.value)} value={zip} />
                                    </Form.Group>
                                </Row>
                                <div className="save">
                                    <button type="submit">Save Address</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit