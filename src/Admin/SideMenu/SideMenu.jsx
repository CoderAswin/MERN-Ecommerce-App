import { Row, Col, Button, Container } from 'react-bootstrap'
import "./SideMenu.scss"
import { Receipt, Inventory, PeopleAlt, Person  , DiscountRounded} from "@mui/icons-material"
import Products from '../Products/Products'
import Orders from '../Orders/Orders'
import Customers from '../Customers/Customers'
import { useState } from 'react'
import Coupons from '../Coupons/Coupons'
import AddCoupon from '../Coupons/Add/AddCoupon'

const SideMenu = () => {

    return (
        <>

            <Row>
                <Col md={2}>
                    <div className='menuBody'>
                        <div>
                            <Button className='adminBody' variant="dark">
                                <div className='admin'>
                                    <span className='avatar'><Person /></span>
                                    <div className='username'>
                                        <span>Aswin</span>
                                        <span>87564328</span>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div>
                            <Button style={{ width: "100%" }} variant="light">
                                <div className='menuItems'>
                                    <Receipt />
                                    <span>ORDERS</span>
                                </div>
                            </Button>
                        </div>
                        <div>
                            <Button  style={{ width: "100%" }} variant="light">
                                <div className='menuItems'>
                                    <Inventory />
                                    <span>PRODUCTS</span>
                                </div>
                            </Button>
                        </div>
                        <div>
                            <Button style={{ width: "100%" }} variant="light">
                                <div className='menuItems'>
                                    <PeopleAlt />
                                    <span>CUSTOMERS</span>
                                </div>
                            </Button>
                        </div>
                        <div>
                            <Button style={{ width: "100%" }} variant="light">
                                <div className='menuItems'>
                                    <DiscountRounded/>
                                    <span>COUPONS</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col md={10}>
                    {/* <Coupons/> */}
                     {/* <Products /> */}
                     {/* <Orders /> */}
                     {/* <Customers /> */}
                     <AddCoupon/>
                </Col>
            </Row>

        </>
    )
}

export default SideMenu