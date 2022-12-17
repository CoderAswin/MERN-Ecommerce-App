import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ShoppingBagOutlined, FavoriteBorderOutlined, DetailsSharp } from "@mui/icons-material"
import './showcase.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from "react-redux"
import {increment} from "../../redux/action/increment"

const Showcase = () => {

    //id
    const { id } = useParams()

    //images
    const [img, setImg] = useState(0)

    //productDetails
    const [details , setDetails] = useState(0)


    //size

    const [size, setSize] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {

        const getProdById = async () => {
            await axios.get(`http://localhost:5000/getProducts/${id}`).then((res) => {
                // console.log(res);
                const { data } =  res
                setImg(data.images)  
                setDetails(data)           

            })
        }

        getProdById()


    }, [])

    // console.log(details);

    const addToCart = () => {
        
        const { model , name , price , images:{imgOne} , total} = details


        axios.post("http://localhost:5000/addToCart" , {model , name , price , imgOne , size , total}).
        then((res)=>{
            console.log(res);
        })

        
    }

    

    

    // console.log(details);

    const photos = Object.values(img) //array of image links
    // console.log(photos);

    const [bigImage, setBigImage] = useState(`${photos[0]}`)

    
    return (
        <div className='showCaseBody'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='imgGallery'>
                            {photos.map((img) =>
                                <div className='smImgBody' onMouseOver={() => setBigImage(img)} style={{ marginTop: "10px", cursor: "pointer" }}>
                                    <img className='smImage' src={img} alt="" />
                                </div>
                            )}
                            <div className='bgImageBody'>
                                <img src={bigImage} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='infoBody'>
                            <div>
                                <h1 style={{ color: "#B19975" }}>{details.name}</h1>
                                <span>{details.model}</span>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <h3>₹{details.price}</h3>
                                <p style={{ color: "#B19975" }}>MRP <span style={{ textDecoration: "line-through" }}>{details.originalAmount}</span> ({details.off} OFF)<br />
                                    <span>Price inclusive of all taxes</span></p>
                            </div>
                            <div className='size'>
                                <span>Select Size</span>
                                <div style={{ marginTop: "10px" , cursor:"pointer" }}>
                                    <span onClick={()=>setSize("S")} className='s'>S</span>
                                    <span onClick={()=>setSize("M")} className='m'>M</span>
                                    <span onClick={()=>setSize("L")} className='l'>L</span>
                                    <span onClick={()=>setSize("XL")} className='xl'>XL</span>
                                    <span onClick={()=>setSize("XXL")}className='xxl'>XXL</span>
                                </div>
                            </div>
                            <div className='bag' style={{ marginTop: "30px" }}>
                                <button onClick={()=>{dispatch(increment()) ; addToCart()}} className='add' style={{ width: '300px', fontSize: "20px", backgroundColor: "#D5A249", border: "none", padding: "7px", color: "white" }}>
                                    <ShoppingBagOutlined />
                                     Add To Bag
                                </button>
                                <span>HANDPICKED STYLES | ASSURED QUALITY</span>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                <button style={{ width: '300px', fontSize: "20px", padding: "7px", border: "none" }}>
                                    <FavoriteBorderOutlined />
                                     Save To Wishlist
                                </button>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                <span style={{ color: "#406786" }}>Product Details</span>
                                <ul>
                                    <li>Package contains: 1 t-shirt</li>
                                    <li>Cotton</li>
                                    <li>Machine wash</li>
                                    <li>Product Code: 464104985005</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Showcase