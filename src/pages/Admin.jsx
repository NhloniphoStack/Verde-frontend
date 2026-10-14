import { useState } from "react";
import { Await, useLoaderData, useNavigate } from "react-router";

export default function Admin(){
    const promise = useLoaderData()?.orders
    const navigate = useNavigate()
    const [stats, setStats] = useState(null)
   
    function handleRedirect(){
          return navigate('/admin/new', {viewTransition: true})
    }
    return (
        <section className="container">
        
        <div className="dashboard-layout">

       <h2 >Dashboard</h2>

        <div className="stats-container">
         <div className="stat">
          <span>Total orders</span>
          <h1>{stats?.total_orders || 0}</h1>
         </div>

         <div className="stat">
          <span>Revenue</span>
          <h1>${stats?.total_revenue || 0}</h1>
         </div>

         <div className="stat">
          <span>products</span>
          <h1>{stats?.total_products || 0}</h1>
         </div>


        </div>
        <div className="recent-container">
         <h3 className="recent-text">Recent orders</h3>
         <div>
            <button 
            onClick={handleRedirect}
            className="product-add-button">Add product</button>
         </div>
        </div> 
        
        
            <table className="order-table" cellSpacing={'40px'}>
                <tr>
                    <th>Order</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
                
                <Await resolve={promise}>
                    {orders => {
                       
                        setStats(orders?.stats)
                       

                        return (
                            <>
                            {orders?.orders?.toReversed()?.map(order =>
                                 <tr>
                                    <td>#{order?.order_id}</td>
                                    <td>{order?.customer}</td>
                                    <td>${order?.total}</td>
                                    <td>{order?.status}</td>
                                 </tr>
                                
                                )}
                            </>
                        )
                    }}
                </Await>
            </table>
          </div>
        </section>
    )
}