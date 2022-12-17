
import './dropDownNav.scss'
import { Row, Col } from "react-bootstrap"

const DropDownNav = () => {
    return (
        <div className="dropDownBody">
            <Row>
                <Col md={3}>
                    <div>
                        <span>Topwear</span>
                        <ul>
                            <li>T-Shirts</li>
                            <li>Casual Shirts</li>
                            <li>Formal Shirts</li>
                            <li>Sweatshirts</li>
                            <li>Sweaters</li>
                            <li>Jackets</li>
                            <li>Blazers & Coats</li>
                            <li>Suits</li>
                            <li>Rain Jackets</li>
                        </ul>
                        <hr />
                        <span>Indian & Festive Wear</span>
                        <ul>
                            <li>Kurtas & Kurta Sets</li>
                            <li>Sherwanis</li>
                            <li>Nehru Jackets</li>
                            <li>Dhotis</li>
                        </ul>
                    </div>
                </Col>

                <Col md={3}>
                    <div>
                        <span>Bottomwear</span>
                        <ul>
                            <li>Jeans</li>
                            <li>Casual Trousers</li>
                            <li>Formal Trousers</li>
                            <li>Shorts</li>
                            <li>Track Pants & Joggers</li>
                        </ul>
                        <hr />
                        <span>Innerwear</span>
                        <ul>
                            <li>Briefs & Trunks</li>
                            <li>Boxers</li>
                            <li>Vests</li>
                            <li>Sleepwear & Loungewear</li>
                            <li>Thermals</li>
                        </ul>
                        <hr />
                        <span>Plus Size</span>
                    </div>
                </Col>

                <Col md={3}>
                    <div>
                        <span>Footwear</span>
                        <ul>
                            <li>Casual Shoes</li>
                            <li>Sports Shoes</li>
                            <li>Formal Shoes</li>
                            <li>Sneakers</li>
                            <li>Sandals & Floaters</li>
                            <li>Flip Flops</li>
                            <li>Socks</li>
                        </ul>
                        <hr />
                        <span>Personal Care</span><br />
                        <span>Sunglasses & Frames</span><br />
                        <span>Watches</span>
                    </div>
                </Col>

                <Col md={3}>
                    <div>
                        <span>Sports & Active Wear</span>
                        <ul>
                            <li>Sports Shoes</li>
                            <li>Sports Sandals</li>
                            <li>Active T-Shirts</li>
                            <li>Track Pants & Shorts</li>
                            <li>Tracksuits</li>
                            <li>Jackets & Sweatshirts</li>
                            <li>Sports Accessories</li>
                            <li>Swimwear</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default DropDownNav