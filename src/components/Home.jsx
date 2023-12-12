import React, { useContext } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { Context } from '../main'
import AllBlogs from './AllBlogs'

const Home = () => {
  const { isAuthenticated } = useContext(Context)

  // const initPayment = (data) => {
  //   const options = {
  //     key: "rzp_test_CiJBMNUrIaqFcT",
  //     amount: 500,
  //     currency: data.currency,
  //     name: "Donation",
  //     description: "Donate for a cause",
  //     order_id: data.id,
  //     handler: async (response) => {
  //       try {
  //         // const paymentId = response.razorpay_payment_id
  //         const url = "http://localhost:5000/payment/verify"
  //         const { data } = await axios.post(url,response)
  //         console.log(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //     theme: {
  //       color: "#686CFD"
  //     }
  //   }
  //   const rzp1 = new window.Razorpay(options)
  //   rzp1.open()
  // }

  // const handlePayment = async () => {
  //   try {
  //     const orderUrl = "http://localhost:5000/payment/orders"
  //     const {data} = await axios.post(orderUrl, {
  //       amount: 500
  //     })
  //     console.log(data);
  //     initPayment(data.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div >
        <nav>
            <Navbar />
        </nav>
        { isAuthenticated ? (
          <>
          <AllBlogs />
          </>
        ) : (
          <div>
            <div>
          <Hero />
          </div>
         </div>
        ) }
    </div>
  )
}

export default Home