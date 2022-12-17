import React from 'react'
import './footer.scss'
import { Facebook, Twitter, YouTube, Instagram, ShopOutlined, Apple } from '@mui/icons-material'
import { Col, Row } from "react-bootstrap"

const Footer = () => {
    return (


        <div className='footerBody'>
            <Row>
                <Col md={2}>
                    <div>
                        <span style={{marginLeft:"30px"}}>Online Shopping</span>
                        <ul style={{marginTop:"5px"}}>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                        </ul>
                    </div>
                </Col>

                <Col md={2}>
                    <div>
                        <span style={{marginLeft:"30px"}}>Useful Links</span>
                        <ul style={{marginTop:"5px"}}>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Site Map</li>
                            <li>Corporate Information</li>
                            <li>Whitehat</li>
                        </ul>
                    </div>
                </Col>

                <Col md={2}>
                    <div>
                        <span style={{marginLeft:"30px"}}>Customer Policies</span>
                        <ul style={{marginTop:"5px"}}>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>T & C</li>
                            <li>Terms Of Use</li>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Cancellation</li>
                            <li>Returns</li>
                            <li>Privacy Policy</li>
                            <li>Grievance Offer</li>
                        </ul>
                    </div>
                </Col>

                <Col md={2}>
                    <div>
                        <span>Get It On</span>
                        <div style={{marginTop:"5px"}}>
                            <ShopOutlined />
                            <Apple />
                        </div>
                        <span >Keep In Touch</span>
                        <div style={{marginTop:"5px"}}>
                            <Facebook />
                            <Twitter />
                            <YouTube />
                            <Instagram />
                        </div>
                    </div>
                </Col>

                <Col md={2}>
                    <div>
                        <h3><span>100% ORIGINAL </span>Guarantee<br />for all products</h3>
                        
                    </div>
                </Col>

                <Col md={2}>
                    <div>
                        <h3><span>Return Within 30 days </span>of<br />receiving your order</h3>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer