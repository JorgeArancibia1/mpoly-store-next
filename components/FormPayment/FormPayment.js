import { useState } from "react"
import { toast } from "react-toastify"
import { Button } from "semantic-ui-react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import useAuth from "../../hooks/useAuth"
import { paymentCartApi } from "../../api/cart"
import useBuy from "../../hooks/useBuy"
import { forEach, size } from "lodash"
import { marcarProductoComoVendido } from "../../api/product"


const FormPayment = () => {
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const {auth, logout} = useAuth();
  const {productosAComprar, metodoDespacho, metodoCompra} = useBuy();
  console.log("productos a comprar => ", productosAComprar)
  console.log("metodo despacho => ", metodoDespacho)
  console.log("metodo compra => ", metodoCompra)
  console.log("auth id user => ", auth.idUser)

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
          productosAComprar,
          auth.idUser,
          logout, 
          metodoDespacho,
          metodoCompra
        );
        if(size(response) > 0){
          forEach(productosAComprar, (product) => {
            marcarProductoComoVendido(product.id, logout)
          });
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
