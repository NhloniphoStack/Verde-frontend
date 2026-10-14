import { useNavigate } from 'react-router'
import cancel from '../assets/cancel.svg'
export default function OrderCancelled(){
    const navigate = useNavigate()
    return(
        <section className="container">
        <div className='cancel-container'>
          <img className='cancel-symbol' src={cancel} />
           <h1>Order Failed</h1>
           <p>
            Attempt ordering 
            again or contact our
            support team
            </p>
            <div>
                <button 
                onClick={() => navigate('/checkout', {viewTransition: true})}
                className='back-button'>
                    Go back to Checkout
                </button>
            </div>
        </div>
        
        </section>
    )
}