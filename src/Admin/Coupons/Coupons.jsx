import { Container, Button } from 'react-bootstrap'
import {useEffect , useState} from "react"
import axios from 'axios'

const Coupons = () => {

    const [coupon, setCoupon] = useState([])

    useEffect(() => {
      const getCoupons = async()=>{
        const coupons = await axios.get("http://localhost:5000/getCoupons")
        const {data:{data}} = coupons
        // console.log(data);
        setCoupon(data)
      }

      getCoupons()
    }, [coupon])

    
    const deleteCoupon = async(id) => {
        const deletedCoupon = await axios.delete(`http://localhost:5000/deleteCoupons/${id}`)
        console.log(deletedCoupon);
    }
    

    return (
        <>
            <Container>
                <div>
                    <div className='dashboard'>
                        <h4 style={{ fontWeight: "bold" }}>Coupons</h4>
                        <Button variant="dark">Add</Button>
                    </div>
                    <div>
                        <table className='inventoryBody'>
                            <tr className='inventory'>
                                <th>Name</th>
                                <th>% OFF</th>
                                <th>Duration</th>
                                <th>Options</th>
                            </tr>
                            {coupon.map((coupon)=>(
                            <tr className='inventory'>
                                <td>{coupon.name}</td>
                                <td>{coupon.percent_off}</td>
                                <td>{coupon.duration_in_months}</td>
                                <td style={{marginTop:"30px"}} className='buttons'>
                                    <button id={coupon.id} onClick={(e)=>deleteCoupon(e.currentTarget.id)}>Del</button>
                                </td>
                            </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Coupons