import { useState } from 'react'
import { Form, Container } from 'react-bootstrap'
import { Link , useNavigate} from "react-router-dom"
import './Login.scss'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate()

    const [phone, setPhone] = useState('')

    const sendNumber = () => {
        axios.post(`http://localhost:5000/login/getOtp`, { phone: phone }).
            then((res) => {
                console.log(res.data);
            })
        navigate("/login/getOtp" ,{state: {ph: phone}})
    }

    return (
        <>
            <Container>
                <div className='loginRegister'>
                    <div className='loginBody' style={{ marginTop: "170px" }}>
                        <div>
                            <h4>Login With OTP</h4>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                            <Form.Control onChange={(e) => setPhone(parseInt(e.target.value))} type="text" placeholder="Mobile Number" />
                        </div>
                        <div style={{ marginTop: "30px" }}>
                            <span>By continuing, I agree to the Terms of Use & Privacy<br />Policy</span>
                        </div>
                        <div className='buttons' style={{ marginTop: "20px" }}>
                            
                                <button onClick={sendNumber} className='button'>CONTINUE</button>
                            

                            <Link to="/signup">
                                <button className='button'>SIGN UP</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login