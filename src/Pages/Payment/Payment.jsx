import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap'
import { LocationOnOutlined } from '@mui/icons-material'
import Card from "./CardDetails/Card"
import './payment.scss'
import Wallet from './Wallet/Wallet'
import Netbanking from './Netbanking/Netbanking'
import { useParams , Link} from "react-router-dom"
import {useEffect , useState} from "react"
import axios from 'axios'

const Payment = () => {

    const { bagAmt, discAmt , userid} = useParams()

    const [addressOne, setAddressOne] = useState('')
    const [addressTwo, setAddressTwo] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')


    useEffect(() => {
      const getAddress = async () => {
        const addressDetails = await axios.get(`http://localhost:5000/getUserById/${userid}`)
        const {data:{address:{addressOne , addressTwo , city , state , zip}}} = addressDetails
        const {data:{userInfo:{firstName , lastName , phoneNumber}}} = addressDetails
            setAddressOne(addressOne)
            setAddressTwo(addressTwo)
            setCity(city)
            setState(state)
            setZip(zip)
            setFirstName(firstName)
            setLastName(lastName)
            setPhone(phoneNumber)

      }

      getAddress()
    }, [])
    
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <div>
                            <div className='heading'>
                                <LocationOnOutlined style={{ fontSize: "50px" }} />
                                <h4>Delivery Address<br /><span>We will deliver your order to this address</span></h4>
                            </div>
                            <div style={{ marginLeft: "40px" }}>
                                <span>{addressOne} , {addressTwo} , {state}</span><br />
                                <span>{city}-{zip}</span>
                            </div>
                            <div style={{ marginLeft: "40px" }}>
                                <Link to={`/home/cart/bag/payment/editAccount/${userid}`}>
                                    <button>Edit</button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <Col md={8}>
                            <div style={{ marginTop: "100px" }}>
                                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                    <Row>
                                        <Col sm={4}>
                                            <ListGroup>
                                                <ListGroup.Item action href="#link1">
                                                    Wallet
                                                </ListGroup.Item>
                                                <ListGroup.Item action href="#link2">
                                                    Credit/Debit Card
                                                </ListGroup.Item>
                                                <ListGroup.Item action href="#link3">
                                                    NetBanking
                                                </ListGroup.Item>
                                                <ListGroup.Item action href="#link4">
                                                    Cash On Delivery
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col sm={8}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="#link1">
                                                    <Wallet 
                                                    phone={phone} 
                                                    firstName = {firstName} 
                                                    lastName = {lastName}
                                                    addressOne = {addressOne}
                                                    addressTwo = {addressTwo}
                                                    city = {city}
                                                    state = {state}
                                                    zip = {zip}
                                                />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link2">
                                                    <Card />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link3">
                                                    <Netbanking />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>
                        </Col>
                    </Col>
                    <Col md={3}>
                        <div style={{ marginTop: "60px" }} className='infoBody'>
                            <h4 style={{ fontWeight: "bold" }}>Order Details</h4>
                            <div className='numbers'>
                                <span>Bag Total</span>
                                <span>Rs {bagAmt}</span>
                            </div>
                            <div className='numbers'>
                                <span>Bag discount</span>
                                <span>-Rs 609</span>
                            </div>
                            <div className='numbers'>
                                <span>Delivery Fee</span>
                                <span>Rs 99</span>
                            </div>
                            <hr />
                            <div className='numbers'>
                                <span>Total Amount</span>
                                <hr />
                                <span>Rs {discAmt}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Payment