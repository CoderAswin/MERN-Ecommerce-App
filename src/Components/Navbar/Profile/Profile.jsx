import './profile.scss'
import { Col, Row } from "react-bootstrap"
import {useNavigate} from "react-router-dom"

const Profile = ({ loggedUser , userid }) => {

    const navigate = useNavigate()
    
        const editProfile = () => {
            navigate(`/editProfile/${userid}`)
        }

    return (
        <>
            <Row>
                <Col>
                    <div className='profileBody'>
                        <div className='profileContents'>
                            <span style={{ fontWeight: "bold" }}>Hello!! {loggedUser.firstName}</span>
                            <span>{loggedUser.phoneNumber}</span>
                            <hr />
                        </div>
                        <div className='profileContents'>
                            <span>Orders</span>
                            <span>Wishlist</span>
                            <span>Gift Cards</span>
                            <span>Contact Us</span>
                            <hr />
                        </div>
                        <div className='profileContents'>
                            <span>Myntra Credit</span>
                            <span>Coupons</span>
                            <span>Saved Cards</span>
                            <span>Saved Addresses</span>
                            <hr />
                        </div>
                        <div className='profileContents'>
                            <span onClick={editProfile}>Edit Profile</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Profile