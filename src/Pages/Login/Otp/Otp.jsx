import { Form } from 'react-bootstrap'
import "./Otp.scss"
import {useState} from 'react'
import axios from 'axios'
import { useLocation , useNavigate} from 'react-router-dom'

const Otp = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const phone = location.state.ph

    const [otp, setOtp] = useState('')

    const verify = () => {

        axios.post("/login/otp/verify" , {otp , phone}).
        then((res)=>{
            // console.log(res);
            if(res.data === 'approved'){
                alert("success")
                axios.get(`http://localhost:5000/getUser?user=${phone}`).
                then((res)=>{
                    const {data: {_id}} = res
                    navigate(`/${_id}`)
                }).
                catch(error=>{
                    console.log(error);
                })
                
            } else {
                alert("invalid OTP please try again")
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <>
            <div className='otpBody'>
                <div className='otp'>
                    <h4 style={{ textDecoration: "underline", marginBottom: "20px" }}>ENTER OTP</h4>
                    <Form.Control onChange={(e)=>setOtp(e.target.value)} className='input' type="text" placeholder="6-DIGIT OTP" />
                    <button onClick={verify} className='button'>VERIFY</button>
                </div>
            </div>
        </>
    )
}

export default Otp