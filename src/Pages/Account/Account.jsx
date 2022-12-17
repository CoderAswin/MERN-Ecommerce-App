import { Col, Row } from 'react-bootstrap'
import "./Account.scss"

const Account = () => {
    return (
        <div className='accountBody'>
            <div className="account">
                <div>
                    <span style={{fontWeight:"bold"}}>Profile Details</span>
                    <hr />
                </div>
                <div className='content'>
                    <span >Full Name</span>
                    <span style={{marginLeft:"40px"}}>Aswin</span>
                </div>
                <div className='content'>
                    <span>Mobile Number</span>
                    <span >8075371687</span>

                </div>
                <div className='content'>
                    <span>Email ID</span>
                    <span >kaswin2288@gmail.com</span>
                </div>
                <div className='content'>
                    <span>Gender</span>
                    <span style={{marginLeft:"60px"}}>MALE</span>
                </div>
                <div className='content'>
                    <span>Date of Birth</span>
                    <span >- not added -</span>
                </div>
                <div className='content'>
                    <span>Location</span>
                    <span style={{marginLeft:"30px"}}>- not added -</span>
                </div>
                <div className='content'>
                    <span>Alternate Mobile</span>
                    <span style={{marginLeft:"-26px"}}>- not added -</span>
                </div>
                <div className='content'>
                    <span>Hint Name</span>
                    <span style={{marginLeft:"13px"}}>- not added -</span>
                </div>
                <div className='button'>
                    <button>Edit</button>
                </div>

            </div>
        </div>
    )
}

export default Account