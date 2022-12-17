import { InputGroup, Button, Form } from 'react-bootstrap'
import "./orderInfo.scss"
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'


const OrderInfo = ({ total }) => {

    const { userid } = useParams()

    // console.log(total);
    var totalAmt = total + 99

    const [couponOn, setCouponOn] = useState(false)
    const [discAmt, setDiscAmt] = useState('')
    const [discount, setDiscount] = useState('')
    const [coupon, setCoupon] = useState([])
    const [couponId, setCouponId] = useState('')



    useEffect(() => {
        const getCoupons = async () => {
            const coupons = await axios.get("http://localhost:5000/getCoupons")
            const { data: { data } } = coupons
            // console.log(data);
            setCoupon(data)
            // setTotalAmt(total + 99)
        }

        getCoupons()
    }, [coupon, totalAmt])


    const applyCoupon = async () => {
        setCouponOn(true)
        const getCoupon = await axios.get(`http://localhost:5000/getCoupons/${couponId}`)
        const { data: { amount_off } } = getCoupon
        setDiscount(parseInt(amount_off))
        setDiscAmt(totalAmt - amount_off)
    }





    return (
        <>
            <div className='infoBody'>
                <h4 >Order Details</h4>
                <div className='numbers'>
                    <span>Bag Total</span>
                    <span>Rs {total}</span>
                </div>
                <div className='numbers'>
                    {couponOn && <><span>Bag discount</span>
                        <span>Rs {discount} Off</span>
                    </>
                    }
                </div>
                <div className='numbers'>
                    <span>Delivery Fee</span>
                    <span>Rs 99</span>
                </div>
                <div className='numbers'>
                    <span>Total Amount</span>
                    <hr />
                    <span>Rs {totalAmt}</span>
                </div>
                {couponOn && <div className='numbers'>
                    <span>Amount after Discount</span>
                    <hr />
                    <span>Rs {discAmt}</span>
                </div>}

                <Link to={`/home/cart/bag/payment/${total}/${discAmt}/${userid}`}>
                    <button >PROCEED TO PAYMENT</button>
                </Link>
            </div>

            <div className='couponBody'>
                <input type="text" placeholder='Enter Coupon Code' />
                <button onClick={applyCoupon}>Apply</button>
            </div>
            {coupon.map((code) => (
                <div className='couponCode'>
                    <Form.Check
                        inline
                        label={code.name}
                        name="group1"
                        id={code.id}
                        onChange={(e) => setCouponId(e.currentTarget.id)}
                    />
                </div>
            ))}

        </>
    )
}

export default OrderInfo