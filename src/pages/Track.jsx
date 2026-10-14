import { useState } from "react"
import { useFetcher, Form, useLoaderData, useSearchParams, Await } from "react-router"


export default function Track(){
    const [showResults, setShowResults] = useState(false)
    const fetcher = useFetcher()
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id") || 0
    

    function handleSubmit(){
        fetcher.submit({
            id: value
        }, {
            method: 'GET',
            action: "/track"
        })
    }

    const order = useLoaderData()?.order
  
    
    return(
        <section className="container">
            <div className="tracking">
            <div className="tracking-layout">

            
          
            <Form method="POST" >
            <div className="track-form">
                  <div className="tracking-heading">
                  <h2>Track your orders</h2>
                  <p className="tracking-instructions">
                  Enter your order number and 
                email you used at checkout.
            </p>
            </div>
                <label htmlFor="id">Order number</label>
                <input
                name="id"
                onChange={(e) => setSearchParams({id: e.target.value})}
                id="id"
                placeholder="VD-1042"/>
                <button
                className="track-button"
                >Track order</button>
                
            </div>
            </Form>
            <Await resolve={order}>
                {userOrder => {
                   
                    return (
                        <div className="track-results-container">
                        {userOrder.map(ord =>
                             <div className="results-container">
                             <p>Order #{ord?.id}</p>

                             <p>{ord?.status}</p>
                             </div>
                            ) }
                        </div>
                    )
                }}

            </Await>
            

            {id.length === 0 &&
             <div className="landing-results-container">
                <p>Your order status will appear here</p>
            </div>}
            </div>
             </div>
        </section>
    )
}