import { useState } from "react"
import { Await, useFetcher, useLoaderData, useNavigate, useSubmit } from "react-router"
import { ClockLoader } from "react-spinners"
import bag from '../assets/bag.svg'
import CartItem from "../components/CartItem"
export default function Cart(){
    const cartPromise = useLoaderData()?.cart
    const [quantity, setQuantity] = useState(null)
    const [subTotal, setSubTotal ] = useState("")
    const [shipping, setShipping] = useState("")
    const [total, setTotal] = useState("")
     const navigate = useNavigate()
     const submit = useSubmit()
    
     const fetcher = useFetcher()
    function handleRemove(id){
     fetcher.submit({productid: id}, {
        method: 'delete',
        action: ""
     })
    }

    function handleCheckout(){
        navigate('/checkout')
    }
    return(
        <section className="container">
      
      
        <h2>Your items</h2>
        {quantity !== 0 && <p>{quantity} items</p>}
      <div className="cart-grid">
       <div className="cart-layout">
        <Await resolve={cartPromise}>
        {cart => {
            
            setQuantity(cart?.quantity)
            
            setSubTotal(cart?.subTotal || 0)
             setShipping(cart?.shipping || 0)
             setTotal(cart?.total)
            return (
                <>
                {cart?.items?.map(product =>
                <CartItem product={product} />
                )}

               {cart?.items.length === 0 &&
                <div className="empty-state">
                    <img  src={bag} />
                     <h2>Your cart is empty</h2>
                     <p>Add something you like and it
                        will show up here
                     </p>
                </div>}
                </>
            )
        }}
        </Await>
       </div> 
       {quantity > 0 && <div className="order-summary-container">
        <p className="summary-text">Order Summary</p>
        <div className="sub-section">
            <p>Subtotal</p>
            <p className="prices">${subTotal}</p>
        </div>
        
         <div className="sub-section">
            <p>Shipping</p>
            <p className="prices">${shipping}</p>
        </div>

         <div className="sub-section total">
            <p>Total</p>
            <p className="prices">${total}</p>
        </div>
        <button 
        onClick={handleCheckout}
        className="checkout-button">Checkout</button>
       </div>}
       </div>
       
        </section>
    )
}