import { Await, Form, Link, useLoaderData, useNavigation } from "react-router"
import { FileUploader } from "react-drag-drop-files";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import {useClickOutside} from '../hooks/useClickOutside.jsx'
import tick from '../assets/tick.svg'
export default function Edit(){

    const [files, setFiles] = useState([])
    const state = useNavigation()?.state
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
        const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

        function handleChange(files){

        setFiles(files)
    }
    const promise = useLoaderData()?.product
    useEffect(() => {
            if(state === 'submitting'){
                
                document.body.style.overflow = "hidden"
                setLoading(true)
                setSubmitting(true)
    
                setInterval(() => {
                    setSubmitting(false)
                }, 4000)
            }else{
                document.body.style.overflow = "unset"
            }
        })

          const modalRef = useClickOutside(() => {
                setLoading(false)
            })




    return(
        <section className="container">
            <h2>Edit</h2>
           <Await resolve={promise}>
              {product => {
                

                return (
                     <Form method="POST">
        <div className="add-form">
         <label htmlFor="name">Product name</label>
         <input 
         defaultValue={product?.title} 
         id="name"
         name="title"
         placeholder="Aero Headphones" required/>

         <label htmlFor="price">Price</label>
         <input  
         defaultValue={product?.price}
         id="price"
         name="price"
         placeholder="$0.00" required/>

         <label htmlFor="category">Category</label>
         <input  
         defaultValue={product?.category}
         id="category"
         name="category"
         placeholder="Speaker" required/>

          <label htmlFor="stock">Stock</label>
         <input  
         defaultValue={product?.stock}
         id="stock"
         name="stock"
         placeholder="1" required/>


         <label htmlFor="description">Description</label>
         <textarea  
         defaultValue={product?.description}
         id="description"
         name="description"
         placeholder="Short description of the product" required/>

         <div className="product-button-container">
                <Link
            className="cancel-button"
            to="/admin/products">
            Cancel
            </Link>
            <button
            className="product-save-button"
            disabled={state !== 'idle'}>
                Save product
            </button>
         </div>
        
        </div>
        </Form>
                )
              }}
           </Await>
        {loading && 
        <div ref={modalRef} className="editing-modal">
             {submitting && 
             <>
            
             <BounceLoader size={80} color="#03976A"/>
             <h4>Editing product...</h4>
              </>}

            {!submitting && <>
                 <img className="done-cion" src={tick} />
                 <p>Product edited</p>
                  <p className="redirect-message">
                         Check it out <Link to="/shop">products</Link>
                 </p>
            </>}
        </div>}
        </section>
    )
}