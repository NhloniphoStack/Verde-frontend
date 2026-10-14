import { Form, useNavigation, Link } from "react-router";
import { FileUploader } from "react-drag-drop-files";
import { ClipLoader } from "react-spinners";
import tick from '../assets/tick.svg'
import { useEffect, useState } from "react";
import {useClickOutside} from '../hooks/useClickOutside.jsx'

export function New(){
    const [files, setFiles] = useState([])
    const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
    const state = useNavigation()?.state
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    function handleChange(files){

        setFiles(files)
    }

    const modalRef = useClickOutside(() => {
        setLoading(false)
    })

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
    return(
        <section className="container">
        <h2>Add product</h2>
        <Form method="POST" encType="multipart/form-data">
        <div className="add-form">
         <label htmlFor="name">Product name</label>
         <input  
         id="name"
         name="title"
         placeholder="Aero Headphones" required/>

         <label htmlFor="price">Price</label>
         <input  
         id="price"
         name="price"
         placeholder="$0.00" required/>

         <label htmlFor="category">Category</label>
         <input  
         id="category"
         name="category"
         placeholder="Speaker" required/>

          <label htmlFor="stock">Stock</label>
         <input  
         id="stock"
         name="stock"
         placeholder="1" required/>


         <label htmlFor="description">Description</label>
         <textarea  
         id="description"
         name="description"
         placeholder="Short description of the product" required/>

         <label className="upload-label" htmlFor="image">Image</label>
         <div className="upload-image-container">
           
         <FileUploader
         
         style={{minWidth: "600px"}}
          types={fileTypes} name="image" handleChange={handleChange}/>
         </div>
         <div className="product-button-container">
                <Link
            className="cancel-button"
            to="/admin/dashboard">
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
        {loading && 
        <div ref={modalRef} className="loading-modal">
           {submitting && 
           <>
           <ClipLoader size={80} color="#03976A"/>
           <h4>Adding product to database...</h4>
           </>
           }
           {!submitting && 
           <>
           <img className="done-cion" src={tick} />
           <p>Product uploaded</p>
           <p className="redirect-message">
            Check it out <Link to="/shop">products</Link>
          </p>
          </>
          }
        </div>}
        </section>
    )
}