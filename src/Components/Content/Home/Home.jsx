import Filter from '../Filter/Filter'
import { useEffect, useState } from 'react'
import { Row, Card, Col, Container } from 'react-bootstrap'
import "./Home.scss"


import axios from 'axios'
import {Link , useNavigate , useParams} from "react-router-dom"







const Home = () => {

    const {userid} = useParams()
    const navigate = useNavigate()
    
    const [product, setProduct] = useState([])

    useEffect(() => {

        axios.get("http://localhost:5000/getProducts").then((res) => {
            setProduct(res.data)
        })

    }, [product])


    return (
        <div className='body'>
            <Container>
                <Row>
                    <Col md={2}>
                        <Filter />
                    </Col>
                    <Col md={10}>
                        <Row>
                            {product.map((pro) => (

                                <Col md={3}>
                                    {/* <Link to={`/home/cart/${pro._id}`} style={{textDecoration:"none" , color:"inherit"}} > */}
                                        <div onClick={()=>navigate(`/home/cart/${pro._id}/${userid}`)} style={{ marginTop: "15px" }} >
                                            <Card className='cardBody' style={{ width: '16.8rem' }}>
                                                <Card.Img className='img' variant="top" src={pro.images.imgOne} />
                                                <Card.Body>
                                                    <Card.Title><div className='title'>
                                                        <span>{pro.name}</span>
                                                    </div>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <div className='content'>
                                                            <div>
                                                                <span style={{ marginLeft: "15px" }}>{pro.model}</span>
                                                            </div>
                                                            <div className='offerprice'>
                                                                <span style={{ fontWeight: "bold" }}>{pro.price}</span>
                                                                &nbsp;
                                                                <span style={{ textDecoration: "line-through" }}>{pro.originalAmount}</span>
                                                                <span>({pro.off}off)</span>
                                                            </div>
                                                            <div className='btn'>
                                                                <button>Go To Bag</button>
                                                            </div>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    {/* </Link> */}
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home