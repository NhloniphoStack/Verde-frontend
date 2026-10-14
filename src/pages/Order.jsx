import { Await, useLoaderData, useNavigate, Link } from 'react-router'
import tick from '../assets/tick.svg'

export default function Order(){
   const navigate = useNavigate()
   const promise = useLoaderData()?.order
  
    function handleContinue(){
       return navigate("/shop")
    }
    return(
        <section className="container">
          <Await resolve={promise}>
            {order => {
              
                return (
                     <div className="order-container">
                        <img src={tick} />
                        <h1>Thanks, your order is placed</h1>
                        <p>Order #{order?.id}</p>
                        <div className='order-total-container'>
                            <p>Total paid</p>
                            <p>${order?.total}</p>
                            
                        </div>
                        
                        <button 
                        onClick={handleContinue}
                        className='continue-button'>Continue shopping</button>
                      </div>
                )
            }}
          </Await>
        </section>
    )
}