import { Await, useLoaderData } from "react-router"

export default function MyOrder(){
    const promise = useLoaderData()?.order
   
    return (
        <section className="container">
        
        <div>
         <Await resolve={promise}>
            {orders => {
                
                return (
                    <div className="my-order">
                    <h2>My orders</h2>
                   <div className="order-layout">
                    <div className="order-heading">
                      <p>Order no</p>
                      <p>Status</p>
                      <p>Total</p>
                    </div>
                    {orders.map(order =>
                     <div key={order.id} className="order-item">
                        <p>#{order?.id}</p>

                        <p>{order?.status}</p>

                        <p>${order.total}</p>
                        
                    </div>)}
                   </div>
                   </div>
                )
            }}
         </Await>
        </div>
        </section>
    )
}