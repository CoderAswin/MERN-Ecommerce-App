import { Form } from 'react-bootstrap'
import "./signUp.scss"
import {useState} from 'react'
import axios from 'axios'

const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')


    const createUser = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/signUp" , {firstName , lastName , phone})
        .then((res)=>{
            console.log(res);
        })

        alert("submitted")

    }
    return (
        <div className='registerBody'>
            <Form onSubmit={(e)=>createUser(e)}>
                <div className='register'>
                    <div>
                        <h4>SIGN UP</h4>
                    </div>

                    <div>
                        <Form.Control onChange={(e)=>setFirstName(e.target.value)} className='inputBox' type="text" placeholder="First Name" />
                    </div>
                    <div>
                        <Form.Control onChange={(e)=>setLastName(e.target.value)} className='inputBox' type="text" placeholder="Last Name" />
                    </div>
                    <div>
                        <Form.Control onChange={(e)=>setPhone(e.target.value)} className='inputBox' type="text" placeholder="Phone Number" />
                    </div>
                    <div>
                        <button className='button'>CONTINUE</button>
                    </div>
                </div>
            </Form>
        </div>

    )
}

export default SignUp