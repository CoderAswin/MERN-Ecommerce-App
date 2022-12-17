import Home from "./Components/Content/Home/Home"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Slide from './Components/SlideShow/Slide'
import Showcase from "./Pages/Showcase/Showcase"
import Cart from "./Pages/Cart/Cart"
import Payment from "./Pages/Payment/Payment"
import Login from "./Pages/Login/Login"
import Account from "./Pages/Account/Account"
import Edit from "./Pages/Account/Edit/Edit"
import SignUp from "./Pages/Signup/SignUp"
import Otp from "./Pages/Login/Otp/Otp"
import Success from "./Pages/Success/Success"
//Admin

import SideMenu from "./Admin/SideMenu/SideMenu"
import Add from "./Admin/Products/Add/Add"
import Product from "./Admin/Products/Products"
import Orders from "./Admin/Orders/Orders"
import Update from "./Admin/Products/Update/Update"
//Router

import { BrowserRouter, Routes, Route } from "react-router-dom"
//redux

import store from "./redux/store"

import { Provider } from 'react-redux'


const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/:userid" element={
              <>
                <Navbar />
                <Slide />
                <Home />
                <Footer />
              </>
            } />
            <Route path="/editProfile/:userid" element={<>
              <Navbar />
              <Edit />
            </>
            } />
            <Route path="/product" element={<>
              <Navbar />
              <Showcase />
            </>} />
            <Route path="/admin/products/add" element={
              <Add />
            } />
            <Route path="/admin/products" element={<>
              <Product />
            </>
            } />
            <Route path="/admin/orders" element={<>
              <SideMenu />
              <Orders />
            </>} />

            <Route path="/home/cart/:id/:userid" element={<>
              <Navbar />
              <Showcase />
              <Footer/>
            </>} />

            <Route path="/home/cart/bag/:userid" element={
              <>
                <Navbar/>
                <Cart/>
              </>
            } />
            <Route path="/home/cart/bag/payment/:bagAmt/:discAmt/:userid" element={<>
              <Payment/>
            </>}/>
            <Route path="/home/cart/bag/payment/editAccount/:userid" element={<>
              <Navbar/>
              <Edit/>
            </>}/>
            <Route path="/admin/products/update/:id" element={<Update />} />
            

            <Route path="/login" element={<>
              <Login/>
            </>} />

            <Route path="/signup" element={<>
              <SignUp/>
            </>} />

            <Route path="/login/getOtp" element={
              <>
                <Otp/>
              </>
            } />
            <Route path="/orderCompletion" element={<Success/>}/>

            <Route path="/coupons" element={
            <>
              <SideMenu/>
            </>}/>

          </Routes>
        </BrowserRouter>
      </Provider>

     

      {/* <SideMenu/> */}
      {/* <Navbar /> */}
      {/* <Login /> */}
      {/* <Payment/> */}
      {/* <Cart/> */}
      {/* <Showcase/> */}
      {/* <Slide/> */}
      {/* <Home/> */}
      {/* <Footer/> */}
      {/* <Account/> */}
      {/* <Edit/> */}
      {/* <Product/> */}
    </>

    

  )
}

export default App