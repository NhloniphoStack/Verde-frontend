import { useEffect } from "react";
import { useState } from "react";
import { Await, useFetcher, useLoaderData, useNavigate, useOutletContext } from "react-router"
import { ClockLoader } from "react-spinners";

export default function ProductDetails(){
    const promise = useLoaderData().product;
    const fetcher = useFetcher()
    const navigate = useNavigate()
     const user = useOutletContext()?.user
     const [count, setCount] = useState(1)
    
     async function handleSubmit(id){

        if(!user){
            return navigate('/login?message=Please Login')
        }
        
           fetcher.submit({
            productid: id,
            quantity: count
           }, {
            method: 'POST',
            action: ""
           })
     }

     function handleIncrement(){
        setCount(prev => count + 1)
     }

     function handleDecrement(){
        setCount(prev => count - 1)
     }

     useEffect(() => {
        if(count === 0){
            setCount(1)
        }
     }, [count])
    return(
        <section className="details container">
         

         <div >
          <Await resolve={promise}>
            {product => {
               
       
                return (
                    <div className="product-details">
                    
                    <div className="detail-container">
                        <img className="detail-photo" src={product?.img} />
                        <div className="detail-content">
                            <p className="detail-title">{product?.title}</p>
                            <p className="detail-price">${product?.price}</p>
                            <p className="detail-overview">{product?.description}</p>
                            <div className="details-buttons">
                            <div className="quantity-control">
                                <button onClick={handleDecrement}>-</button>
                                 <p>{count}</p>
                                  <button onClick={handleIncrement}>+</button>
                            </div>
                            <div className="add-cart-button">
                                <button 
                                
                                onClick={() => handleSubmit(product?.id)}>
                                    {fetcher.state !== 'idle' ? <ClockLoader size={15} color=" #146049"/> : "Add to cart"}
                                </button>
                            </div>
                            </div>
                            <p className="shipping-alert">Free shipping on orders over $50</p>
                        </div>
                    </div>
                    </div>
                )
            }}
          </Await>
         </div>
        </section>
    )
}