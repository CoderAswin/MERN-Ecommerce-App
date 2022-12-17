import './Wallet.scss'
import { Icon } from '@iconify/react';
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios';
import { useSelector } from 'react-redux'

const Wallet = ({ phone, firstName, lastName, addressOne, addressTwo, city, state, zip }) => {

	const bagCount = useSelector((state) => state.bagCount)


	const navigate = useNavigate()
	const { discAmt, userid } = useParams()

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_16wwCaA4sxwXvu",
			amount: data.amount,
			currency: data.currency,
			name: "T-shirt Garrage",
			description: "Test Transaction",
			// image: book.img,
			order_id: data.id,
			handler: async (response) => { // handler is called after success btn clicked
				try {
					const verifyUrl = "http://localhost:5000/api/payment/verify";
					// console.log(response);
					const { data: { success } } = await axios.post(verifyUrl, response);
					console.log(data);
					if (success === true) {
						const orderData = await axios.post("http://localhost:5000/createOrder",
							{
								discAmt, phone, firstName, lastName, addressOne, 
								addressTwo, city, state, zip , bagCount
							})
						console.log(orderData);
						const {data:{newOrder:{_id}}} = orderData
						navigate("/orderCompletion", { state: { discAmt, userid , _id} })
					}
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:5000/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: discAmt });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div >
			<h6>Pay Using Razorpay</h6>
			<button onClick={handlePayment} style={{ width: "40%", backgroundColor: "#0B2349", color: "white" }}>
				<Icon icon="simple-icons:razorpay" />  PAY NOW
			</button>
		</div>
	)
}

export default Wallet