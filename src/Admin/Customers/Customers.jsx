import { Container, Button } from 'react-bootstrap'


const Customers = () => {
  return (
    <>
        <Container>
                <div>
                    <div className='dashboard'>
                        <h4 style={{fontWeight:"bold"}}>Customers</h4>
                        <Button variant="dark">Add</Button>
                    </div>
                    <div className='inventoryBody'>
                        <div className='inventory'>
                            <span>E-Mail Address</span>
                            <div>
                                <img src="" alt="" />
                                <span style={{marginLeft:"15px"}}>kaswin2288@gmail.com</span>
                            </div>
                        </div>
                        <div className='inventory'>
                            <span >First Name</span>
                            <span>Aswin</span>

                        </div>

                        <div className='inventory'>
                            <span>Last Name</span>
                            <span >Kumar</span>
                        </div>

                        <div className='inventory'>
                            <span>Total Orders</span>
                            <span >0.00</span>
                        </div>

                        <div className='inventory'>
                            <span>Total Spent</span>
                            <span >0.00</span>
                        </div>


                        <div className='inventory'>
                            <span>Options</span>
                            <div className='buttons'>
                                <button>Edit</button>
                                <button>Del</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    </>
  )
}

export default Customers