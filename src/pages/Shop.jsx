import { Await, useFetcher, useLoaderData, useOutletContext, useRevalidator } from "react-router"
import { addItemToCart } from "../api/addItemToCart.js"
import { useState } from "react"
import ProductCard from "../components/ProductCard.jsx"
export default function Shop(){
    const promise = useLoaderData()?.products
    const user = useOutletContext()?.user
    const fetcher = useFetcher()
    
    const [added, setAdded] = useState(false)
    const revalidator = useRevalidator()
    
    async function handleAdd(id){
     
      if(!user){
        return;
      }

      try{
          
           fetcher.submit({
            productid: id
           }, {
            method: 'POST',
            action: ""
           })
           
      }catch(error){
        console.log(error)
      }
    }
    return (
        <section className="container">
        <h2>Products</h2>
        <div className="products-layout">
         <Await resolve={promise}>
            {(products) => {
                

                return (
                    <>
                    {products.map(product =>
                    <ProductCard key={product?.id} product={product} />
                    )}
                    </>
                )
            }}
         </Await>
        </div>
        {added && <div className="added-modal">
            <p>☑Item Added to cart</p>
            
        </div>}
        </section>
    )
}