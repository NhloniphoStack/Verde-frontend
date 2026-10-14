import { Await, useFetcher, useLoaderData, useNavigate, useNavigation } from "react-router"
import { useState, useEffect } from "react"
import { useClickOutside } from "../hooks/useClickOutside.jsx"
import { CircleLoader } from "react-spinners"
import tick from '../assets/tick.svg'
export default function Products(){

    const promise = useLoaderData()?.products
    const navigate = useNavigate()
    const state = useNavigation()?.state
    const fetcher = useFetcher()
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    function handleEdit(id){
         return navigate(`/admin/products/${id}`)
    } 
    const [showModal, setShowModal] = useState(false)
   const [id, setId] = useState()
    function handleConfirm(id){
        setId(id)
        setShowModal(prev => !prev)

    }

   async function handleSubmit(){
   
       try{
          setShowModal(false)
        fetcher.submit({
            id: id
        }, {
            method: 'DELETE',
            action: ""
        })
         
    
       }catch(error){
        console.log(error)
       }
    }

    function toggle(){
        setShowModal(false)
    }

    const menuRef = useClickOutside(() => {
        setShowModal(false)
    })

     const modalRef = useClickOutside(() => {
        setLoading(false)
    })

     useEffect(() => {
            if(fetcher.state === 'submitting'){
                
                document.body.style.overflow = "hidden"
                setLoading(true)
                setSubmitting(true)
    
                setInterval(() => {
                    setSubmitting(false)
                    setLoading(false)
                }, 4000)
            }else{
                document.body.style.overflow = "unset"
            }
        })

        function close(){
            setLoading(false)
        }
    return (
        <section className="container">
         <h2>Products</h2>
         <div>
            <table>
                <tr>
                    <th>products</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th></th>
                </tr>
                
                    <Await resolve={promise}>
                        {products => {
                            return (
                                <>
                                {products?.toReversed().map(product =>
                                <tr>
                                <td>{product?.title}</td>
                                <td>{product?.category}</td>
                                <td>{product?.price}</td>
                                <td>{product?.stock}</td>
                                <td>
                                    <button onClick={() => handleEdit(product?.id)} className="edit-button">
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                    onClick={() => handleConfirm(product?.id)}
                                    >delete</button>
                                </td>
                                </tr> 
                                )}
                                </>
                            )

                        }}
                    </Await>
                
            </table>
         </div>
         {showModal && 
         <div ref={menuRef} className="delete-modal">
        <h3>Are you sure you want to delele?</h3>
        <div className="delete-buttons-container">
            <button onClick={toggle}>NO</button>
            <button
            onClick={handleSubmit}
             className="delete-button">Yes</button>
        </div>
         </div>}

        {loading &&
         <div ref={modalRef} className="delete-load-modal">
           {submitting &&
            <>
            <CircleLoader size={80} color="#03976A" />
            <h4>Server is deleting...</h4>
            </>}

            {!submitting && 
            <>
            <img src={tick} />
            <h4>Deleting done</h4>
            </>}
         
         </div>}
        </section>
    )
}