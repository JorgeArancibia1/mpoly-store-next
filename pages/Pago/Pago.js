import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useState } from "react"
import { toast } from "react-toastify"
import { Button } from "semantic-ui-react"
import FormPayment from "../../components/FormPayment"
import { CART, STRIPE_TOKEN } from "../../utils/constans"

const StripePrimise = loadStripe(STRIPE_TOKEN)



const Pago = () => {


  return (
    <div className="payment">
      <div className="title">
        Pago
      </div>
      <div className="data">
        <Elements stripe={StripePrimise} >
        <FormPayment />
        
        </Elements>
      </div>
    </div>
  )
}

export default Pago
