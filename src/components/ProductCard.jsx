import { useState } from "react";
import { useRevalidator, useOutletContext, redirect, useFetcher, useNavigate, Link } from "react-router";
import { addItemToCart } from "../api/addItemToCart.js";
import { ClockLoader } from "react-spinners";
export default function ProductCard({product}){
      const [loading, setLoading] = useState(false)
      const user = useOutletContext()?.user
      const navigate = useNavigate()
    const fetcher = useFetcher()
     
    return (
          <div  className="shop-product-card">
                    <Link to={`/${product?.id}`}>
                    <img className="shop-product-img" src={product?.img} />
                    </Link>
                    <div className="shop-product-content">
                      <p className="shop-product-title">{product?.title}</p>
                       <p className="shop-product-price">${product?.price}</p>
                       
                    </div>
                    
                    </div>
    )
}