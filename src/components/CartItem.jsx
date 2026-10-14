import { useFetcher, useRevalidator } from "react-router"
import { ClockLoader } from "react-spinners"
import { addItemToCart } from "../api/addItemToCart"
import { useState } from "react"
export default function CartItem({product}){
    const fetcher = useFetcher()
    const [count, setCount] = useState(0)
    const revalidate = useRevalidator()
    function handleRemove(id){
     fetcher.submit({productid: id}, {
        method: 'delete',
        action: ""
     })
    }

    async function handleIncrement(){
        setCount(prev => prev + 1)
        
    }

    async function handleDecrement(){
        setCount(prev => prev - 1)
    }
    return (
        <div className="cart-item">
                    
                    
                <img className="cart-img" src={product?.img} />
                <div className="cart-content">
                <div className="cart-title-price">
                   <p className="cart-product-name">{product?.title}</p>
                 <p className="cart-product-price">${product?.price}</p>
                </div>
                

                 <div className="cart-quantity-container">
                    <p>Qty {product?.quantity}</p>

                    <button 
                    className="remove-item-button"
                    onClick={() => handleRemove(product?.product_id)}>
                        {fetcher.state !== 'idle' ? <ClockLoader color="#03976A" size={16} /> : 'Remove'}
                    </button>
                 </div>
                 
                </div>
                <div>
                    
                </div>
                
                </div>
    )
}