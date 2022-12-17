
import { Container, Button } from 'react-bootstrap'

const Orders = () => {
    return (
        <>
            <Container>
                <div>
                    <div className='dashboard'>
                        <h4 style={{fontWeight:"bold"}}>Orders</h4>
                        <Button style={{height:"54px"}} variant="dark">Export As PDF</Button>
                    </div>
                    <div className='inventoryBody'>
                        <div className='inventory'>
                            <span>#Order</span>
                            <div>
                                <img src="" alt="" />
                                <span style={{ marginLeft: "15px" }}>10346874</span>
                            </div>
                        </div>
                        <div className='inventory'>
                            <span >Date/Time</span>
                            <span>20-02-2022</span>

                        </div>

                        <div className='inventory'>
                            <span>Status</span>
                            <span >Dispatched</span>
                        </div>

                        <div className='inventory'>
                            <span>Amount</span>
                            <span>10,000</span>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Orders