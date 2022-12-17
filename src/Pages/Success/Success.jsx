import "./Success.scss"
import {CheckCircle} from "@mui/icons-material"
import {useLocation , useNavigate} from "react-router-dom"
import axios from "axios"

const Success = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const {totalAmt , userid , _id} = location.state

    const deleteCart = async () => {
        await axios.delete("http://localhost:5000/cartDelete")
        navigate(`/${userid}`)
    }
  return (
    <>
        <div className='successBody'>
            <div>
                <div className="message">
                    <CheckCircle className="icon"/>
                    <h4>Your Order id:{_id} of Rs {totalAmt} <br /> Has been Placed and is Ready to Be Shipped</h4>
                </div>
                <div  className="button">
                    <button onClick={deleteCart}>Back To Home</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Success