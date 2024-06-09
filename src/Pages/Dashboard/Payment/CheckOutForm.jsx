import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../Hook/useAxiosSecure";
import { useCart } from "../../../Hook/useCart";
import { useAuth } from "../../../Hook/useAuth";

export const CheckOutForm = () => {
    const [error, setError] = useState("")
    const [secretClient, setSecretClient] =  useState('')
    const [transaction, setTransaction] = useState("")
    const stripe = useStripe();
    const elements = useElements()
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

useEffect(()=>{
  axiosSecure.post('/create-payment-intent',{price: totalPrice})
  .then(res =>{
    console.log(res.data.clientSecret)
    setSecretClient(res.data.clientSecret)
  })

},[axiosSecure, totalPrice])

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(!stripe || !elements){
            return 
        }
        const card  = elements.getElement(CardElement)
        if(card === null){
            return
        }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        console.log("payment method error", error)
        setError(error.message)
    }
    else{
        console.log("payment method success", paymentMethod)
        setError("")
    }
// confirm payment 

const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(secretClient,{
    payment_method: {
            card : card, 
            billing_details: {
                email : user?.email || 'anonymous',
                name : user?.name || 'anonymous'
            }
    }
} )
if(confirmError){
    console.log("confirm error" , confirmError)
}else{
    console.log("payment intent", paymentIntent)
    if(paymentIntent.status === "succeeded"){
        console.log("transaction id", paymentIntent.id)
        setTransaction(paymentIntent.id)
    }
}

    }


  return (
   <form onSubmit={handleSubmit}>
    <CardElement
    
    options={{
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder' : {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146'
            },
        },
    }}
    >
    </CardElement>
    <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !secretClient}>
Pay
    </button>
    <p className="text-rose-500">{error}</p>
    {
        transaction && <p className="text-green-500">Your Transaction Id : {transaction}</p>
    }

   </form>
  )
}
