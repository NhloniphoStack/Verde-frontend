import { useState } from "react";
import { Await, Form, useLoaderData, useNavigation } from "react-router";
import Loading from "./Loading.jsx";

export default function CheckOut(){
    const [value, setValue] = useState()
    const promise = useLoaderData()?.items
    const state = useNavigation().state
    
    function handleSecurity(e){
       
        const {value} = e.target
         
        if(value.length <= 3){
           setValue(() => value)
        }

    }
    return(
        <section className="container">
        <Form method="POST" replace>
        {state === 'idle' && <div className="checkout-layout">
          
        <div className="checkout-form">
         <h2 id="page-heading">Checkout</h2>
         <label htmlFor="email">Email</label>
         <input
          placeholder="you@example.com"
          id="email" name="email" type="email" required/>

          <label htmlFor="name">Full name</label>
         <input
         placeholder="Your full name"
          id="name" name="name" required/>

          <label htmlFor="address">Address</label>
         <input
         placeholder="Street address" 
         id="address" name="address"  required/>
         <div className="location-container">
            <div className="location">
                <label htmlFor="city">City</label>
                <input
                placeholder="City"
                 id="city" name="city" required/>
            </div>

            <div className="location">
                <label htmlFor="postal-code">Postal code</label>
                <input
                placeholder="Postal code"
                 id="postal-code" name="postal-code" required/>
            </div>
         </div>
         <h3>Payment</h3>
         <div className="payment-container">
            <label htmlFor="card-no">Card number</label>
            <input 
            id="card-no"
            type="number"
            placeholder="1234 5678 9101 1213"
            required
             />

             <div className="card-details-container">
                <div className="card-details">
                   <label htmlFor="card-no">Expiry</label>
                <input 
                id="expiry"
                type="month"
                placeholder="MM/YY"
                 required/>
                </div>
                
                <div className="card-details">
                   <label htmlFor="card-no">Security</label>
                <input
                onChange={handleSecurity}
                id="security"
                type="number"
                value={value}
                max={3}
                placeholder="CVC"
                required
                />
                </div>
                
             </div>
         </div>
         <button className="order-button">Place order</button>
         </div>
         <Await resolve={promise}>
           {items => {
          
            return (
                <div className="checkout-order-summary">
            <p className="check-summary-heading">Order summary</p>
             {items?.items?.map(item => <div className="order-name-price">
                <p>{item?.title} x{item?.quantity}</p>
                <p className="prices">${item?.price}</p>
            </div>)}

           

            <div className="order-name-price">
                <p className="section-name">Shipping</p>
                <p className="prices">${items.shipping}</p>
            </div>

            <div className="order-name-price">
                <p className="section-name">Total</p>
                <p className="prices">${items?.total}</p>
            </div>
         </div>
            )
           }}
         </Await>
         
         </div>}
         </Form>
         {state === 'submitting' && <Loading />}
        </section>
    )
}