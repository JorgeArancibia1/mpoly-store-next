import { useState } from "react"
import { toast } from "react-toastify"
import { Button } from "semantic-ui-react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import useAuth from "../../hooks/useAuth"
import { paymentCartApi } from "../../api/cart"
import { TOKEN } from "../../utils/constans"


const FormPayment = () => {
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const {auth, logout} = useAuth();

  const handleSubmit = async (event) =>{
    event.preventDefault()
    setLoading(true)
      if(!stripe || !elements) return;

      const cardElement = elements.getElement(CardElement)
      const result = await stripe.createToken(cardElement)

      if(result.error){
        toast.error(result.error.message)
      }else{
        const response = await paymentCartApi(
          result.token,
          products,
          auth.idUser,
          logout
        );
        if(size(response) > 0){
          toast.success("Pedido Completado.")
        }else{
          toast.error("Error al completar el pedido.")
        }
      }
      
    setLoading(false)
  }
  return (
    <form className="form-payment" onSubmit={handleSubmit}>
          <CardElement />
          <Button disabled={!stripe} loading={loading} type="submit">
            Pagar
          </Button>
         </form>
  )
}

export default FormPayment
