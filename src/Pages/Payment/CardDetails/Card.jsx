import { Form } from 'react-bootstrap'
import './card.scss'

const Card = () => {
    return (
        <div className='cardBody'>
            <h5>Add New Card</h5>
            <div style={{marginTop:"10px"}}>
                <Form.Label  htmlFor="inputPassword5">Card Number</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    style={{ width: "70%" }}
                />
            </div>
            <div style={{marginTop:"10px"}}>
                <Form.Label  htmlFor="inputPassword5">Name on Card</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    style={{ width: "70%" }}
                />
            </div>
            <div style={{marginTop:"10px"}}>
                <Form.Label  htmlFor="inputPassword5">Expiration Date</Form.Label>
                <div className='select'>
                    <Form.Select style={{ width: "23%" }}>
                        <option>Month</option>
                    </Form.Select>
                    <Form.Select style={{ width: "23%" , marginLeft:"15px"}}>
                        <option>Year</option>
                    </Form.Select>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        style={{ width: "17%" , marginLeft:"15px"}}
                        placeholder="CV"
                    />
                </div>
            </div>
            <div>
                <button>PAY SECURELY</button>
            </div>
        </div>
    )
}

export default Card