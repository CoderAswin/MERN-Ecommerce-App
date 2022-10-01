const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const product = require("./Models/product")
const cart = require("./Models/cart")
const UserDetails = require("./Models/user")
const order = require("./Models/order")
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors")
const Razorpay = require('razorpay');
const crypto = require('crypto')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// twilio initialization
const client = require("twilio")(process.env.ACCOUNTSID, process.env.AUTHTOKEN)

//razorpay initialization
var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })


//.env
const PORT = process.env.PORT
const mongoConnect = process.env.CONNECTION

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect(mongoConnect, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to DB");
    }
})




//products//


//post
app.post("/addProduct", async (req, res) => {
    const products = new product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        model: req.body.model,
        originalAmount: req.body.originalAmount,
        off: req.body.off,
        quantity: req.body.quantity,
        images: {
            imgOne: req.body.imgOne,
            imgTwo: req.body.imgTwo,
            imgThree: req.body.imgThree,
            imgFour: req.body.imgFour

        }

    })

    try {
        await products.save()
        res.send(products)
    } catch (error) {
        res.status(500).send(error)
    }
})

//get
app.get("/getProducts", async (req, res) => {
    const all = await product.find({})
    try {
        res.send(all).status(200)
    } catch (error) {
        res.send(error).status(400)
    }
})

// get based On Id

app.get("/getProducts/:id", async (req, res) => {
    const findById = await product.findById({ _id: req.params.id }) //get product based on Id
    try {
        res.send(findById).status(200)
    } catch (error) {
        res.send(error).status(400)
    }

})

//update product

app.post('/updateProduct/:id', async (req, res) => {
    const id = req.params.id
    const update = await product.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        model: req.body.model,
        originalAmount: req.body.originalAmount,
        off: req.body.off,
        quantity: req.body.quantity,
        images: {
            imgOne: req.body.imgOne,
            imgTwo: req.body.imgTwo,
            imgThree: req.body.imgThree,
            imgFour: req.body.imgFour

        }
    })

    try {
        res.send(update).status(200)
    } catch (error) {
        res.send(err).status(400)
    }

})

app.delete('/delete/:id', async (req, res) => {
    await product.findByIdAndDelete({ _id: req.params.id })
    try {
        res.send("deleted").status(200)
    } catch (error) {
        res.send(error).status(400)
    }
})


//cart//

app.post("/addToCart", async (req, res) => {
    const cartDetails = cart({
        model: req.body.model,
        name: req.body.name,
        price: req.body.price,
        image: req.body.imgOne,
        size: req.body.size,
        total: req.body.price,
        quantity: 1
    })

    try {
        await cartDetails.save()
        res.send(cartDetails).status(200)
    } catch (error) {
        res.send(error).status(404)
    }

})

app.get("/bag", async (req, res) => {
    const bag = await cart.find({})
    try {
        res.send(bag).status(200)
    } catch (error) {
        res.send(error).status(400)
    }
})

app.post("/updateCart", async (req, res) => {

    let price = req.body.price
    let size = req.body.size
    let quantity = req.body.quantity
    let total = price * quantity

    await cart.findByIdAndUpdate({ _id: req.body.id }, {
        price: price,
        size: size,
        quantity: quantity,
        total: total
    })

    try {
        res.send("updated").status(200)
    } catch (error) {
        res.send(error).status(400)
    }
})

app.delete("/deleteCartItem/:id", async (req, res) => {
    await cart.findByIdAndDelete({ _id: req.params.id })

    try {
        res.send("deleted").status(200)
    } catch (error) {
        res.send(error).status(400)
    }
})

app.delete("/cartDelete", async(req , res)=>{
    await cart.deleteMany({})
    try {
        res.json({message: "All cart items Deleted" , success: true}).status(200)
    } catch (error) {
        res.json({message: "cant delete cart items" , success: false}).status(400)
    }
})

//User

app.post("/signUp", async (req, res) => {
    const newUser = UserDetails({
        userInfo: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phone
        }
    })
    try {
        await newUser.save()
        res.send("User Created").status(200)
    } catch (error) {
        res.send(error).status(400)
    }

})

app.get("/getUser", async (req, res) => {
    const user = await UserDetails.find({
        phoneNumber: req.query.user
    })
    try {
        res.json(user[0]).status(200)
    } catch (error) {
        res.send(error).status(400)
    }
})

//getUserById

app.get("/getUserById/:userid", async (req, res) => {
    const getUserById = await UserDetails.findById({ _id: req.params.userid })
    try {
        res.send(getUserById).status(200)
    } catch (error) {
        res.send(error)
    }
})

//getAddress

app.post("/getAddress/:id", async (req, res) => {
    const getAddress = await UserDetails.findByIdAndUpdate({ _id: req.params.id }, {
        address: {
            addressOne: req.body.addressOne,
            addressTwo: req.body.addressTwo,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        }
    })

    try {
        res.send(getAddress).status(200)
    } catch (error) {
        res.send(error).status(401)
    }

})


//login using OTP

app.post("/login/getOtp", async (req, res) => {
    await client.
        verify.
        v2.
        services(process.env.SERVICEID).
        verifications.
        create({ to: `+91${req.body.phone}`, channel: 'sms' }).
        then((verification) => {
            res.send(verification).status(200)
        }).
        catch((err) => {
            res.send(err).status(404)
        })

})

app.post("/login/otp/verify", async (req, res, next) => {
    await client.
        verify.
        v2.
        services(process.env.SERVICEID).
        verificationChecks.
        create({ to: `+91${req.body.phone}`, code: req.body.otp }).
        then((verify) => {
            res.send(verify.status).status(200)

        }).
        catch((err) => {
            res.send(err).status(401)
        })


})


//Razorpay SDK

app.post("/payment/orders", async (req, res) => {
    try {
        var instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR"
        }
        instance.orders.create(options, function (error, order) {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Something went Wrong" })
            }
            res.status(200).json({ data: order })
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
})

app.post("/api/payment/verify" , async(req , res)=>{
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body

    const sign = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSign = crypto
    .createHmac("sha256" , process.env.KEY_SECRET)
    .update(sign.toString())
    .digest("hex")

    if(razorpay_signature === expectedSign){
        return res.status(200).json({message: "Payment verified successfully" , signature: expectedSign , success: true})
    } else {
        return res.status(400).json({message: "Invalid Signature" , success: false})
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"})
    }
})

//order

//create Order

app.post("/createOrder" , async (req , res)=>{
    let totalItems = req.body.bagCount
    let customerName = req.body.firstName + '' + req.body.lastName
    let phone = req.body.phone
    let totalAmount = req.body.totalAmt
    let address  = req.body.addressOne + "," + req.body.addressTwo + "," + req.body.city + "," + req.body.state + "-" + req.body.zip

    const newOrder = order({
        totalItems: totalItems,
        customerName: customerName,
        phone: phone,
        totalAmount: totalAmount,
        address: address
    })

    try {
        await newOrder.save()
        res.json({message : "Order Created Successfully", newOrder:newOrder}).status(200)
    } catch (error) {
        res.json({message: "Error creating Order" }).status(400)
    }

    
})

//stripe Coupon

//create
app.post("/createCoupon" , async(req , res)=>{
    const coupon = await stripe.coupons.create({
        amount_off: req.body.off,
        duration: 'repeating',
        duration_in_months: req.body.duration,
        currency: "INR",
        name: req.body.name
      });
    try {
        res.send(coupon)
    } catch (error) {
        res.send(error)
    }
})

//get all coupons

app.get("/getCoupons" , async(req , res)=>{
    const coupons = await stripe.coupons.list({
    });
    try {
        res.send(coupons)
    } catch (error) {
        res.send(error)
    }
})

//delete coupons

app.delete("/deleteCoupons/:id" , async(req , res)=>{
    const deleted = await stripe.coupons.del(
        req.params.id
    );
    try {
        res.send(deleted)
    } catch (error) {
        res.send(error)
    }
})

//get coupon by Id

app.get("/getCoupons/:id" , async(req , res)=>{
    const coupons = await stripe.coupons.retrieve(
        req.params.id
    );
    try {
        res.send(coupons)
    } catch (error) {
        res.send(error)
    }
})





app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})