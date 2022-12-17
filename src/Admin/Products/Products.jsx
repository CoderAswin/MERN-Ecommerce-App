import { Container, Button } from 'react-bootstrap'
import "./Products.scss"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
// import { useNavigate } from 'react-router-dom'

const Products = () => {
    const [product, setProduct] = useState([])

    // const id = useParams()

    useEffect(() => {

        axios.get("http://localhost:5000/getProducts").then((res) => {
            setProduct(res.data)
        })

    }, [product])
    // console.log(product);



    const deleteProduct = (id)=> {

        axios.delete(`http://localhost:5000/delete/${id}`).then((res)=>{
            console.log(res.data);
        })
    }
    return (
        <>
            <Container>
                <div>
                    <div className='dashboard'>
                        <h4 style={{ fontWeight: "bold" }}>Products</h4>
                        <Link to="/admin/products/add">
                            <Button style={{ width: "50px" }} variant="dark">Add</Button>
                        </Link>
                    </div>


                    <table className='inventoryBody'>
                        <tr className='inventory'>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                        {product.map((pro) => (


                            <tr className='inventory'>
                                <td>

                                    <img className='productImage' src={pro.images.imgOne} alt="" />
                                    <span style={{ marginLeft: "15px" }}>{pro.name}</span>

                                </td>
                                <td>{pro.quantity}</td>
                                <td>{pro.model}</td>
                                <td>{pro.price}</td>
                                <td className='buttons'>

                                    <Link to={`/admin/products/update/${pro._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                        <button id={pro._id} onClick={(e)=>deleteProduct(e.currentTarget.id)} >Del</button>
                                </td>
                            </tr>
                        ))}
                    </table>

                    {/* {product.map((pro) => (


                        <div className='inventoryBody'>
                            <div className='inventory'>
                                <span>Product</span>
                                <div>
                                    <img className='productImage' src={pro.images.imgOne} alt="" />
                                    <span style={{ marginLeft: "15px" }}>{pro.name}</span>
                                </div>
                            </div>

                            <div className='inventory'>
                                <span >Quantity</span>
                                <span>{pro.quantity}</span>

                            </div>
                            <div className='inventory'>
                                <span >Model</span>
                                <span>{pro.model}</span>

                            </div>

                            <div className='inventory'>
                                <span>Price</span>
                                <span>{pro.price}</span>
                            </div>

                            <div className='inventory'>
                                <span>Options</span>
                                <div className='buttons'>
                                    <Link to={`/admin/products/update/${pro._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button  >Del</button>
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </Container>
        </>
    )
}

export default Products