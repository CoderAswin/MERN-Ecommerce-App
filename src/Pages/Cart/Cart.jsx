import './cart.scss'
import { Row, Col, Container } from "react-bootstrap"
import OrderInfo from './OrderInfo/OrderInfo'
import axios from 'axios'
import {useEffect , useState} from "react"
import { useSelector  , useDispatch} from 'react-redux'
import { decrement, increment } from '../../redux/action/increment'


const Cart = () => {

    //Shirt Size
    const [size, setSize] = useState('S')

    //total price of all items in cart
    const [total, setTotal] = useState('')

    //all cart items
    const [cart, setCart] = useState([])

    useEffect(() => {
        
        axios.get("http://localhost:5000/bag").
        then((res)=>{
            setCart(res.data);
        })

        const grandTotal = cart.map((cart)=>cart.total).reduce((curr , prev) => parseInt(curr) + parseInt(prev) , 0) //
        setTotal(grandTotal)
        
    }, [cart])

    //function to change the Price
    const changePrice = (quantity , id) => {
        const findProduct = cart.find((product) => product._id === id)
        let {price} = findProduct
        
    
        axios.post(`/updateCart` , {price , size , id , quantity}).
        then((res)=>{
            console.log(res);
        })

        
    }

    const deleteItems = (id)=> {
        axios.delete(`/deleteCartItem/${id}`).then((res)=>{
            console.log(res);
        })
    }

    
    const dispatch = useDispatch()

    
    const initialBagCount = useSelector((state) => state.bagCount)

    return (
        <div className='cartBody'>
            <Container>
                <Row>
                    <Col md={8}>
                        <div>
                            <h4 style={{marginBottom:"70px"}}>My Bag({initialBagCount} items)</h4>
                            {cart.map((cart)=>(
                            <div className='card' style={{ marginTop: "20px"}}>
                                
                                <div className='cardChild'>
                                    <img className='img' src={cart.image} alt="" />
                                    <div className='contents'>
                                        <span style={{marginLeft:"10px"}}>{cart.name}<br />{cart.model}</span>
                                        <div style={{ marginLeft: "30px" }}>
                                            <label for="size">Size:</label>
                                            <select onChange={(e)=>setSize(e.target.value)} name="size">
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                            </select>
                                        </div>
                                        <div className='qtyBody' style={{ marginLeft: "20px" }}>
                                            <label for="size">Qty:</label>
                                            <select id={cart._id} onChange={(e)=>changePrice(e.target.value , e.currentTarget.id)} name="size">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                        <div className='hi' style={{marginLeft:"150px"}}>
                                            <span>Price: ₹{cart.total}</span>
                                            <div onClick={()=>dispatch(decrement())} className='delete'>
                                                <span id={cart._id} onClick={(e)=>deleteItems(e.currentTarget.id)} >Delete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                             ))}
                        </div>
                    </Col>
                    <Col md={4}>
                        <OrderInfo total={total}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart