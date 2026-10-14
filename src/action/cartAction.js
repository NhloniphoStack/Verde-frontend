import { deleteItemCart } from "../api/deleteItemCart.js"

export async function cartAction({request}){

    const formData = await request.formData()
    const product = formData.get("productid")
    
    try{
        const attempt = await deleteItemCart({
            productid: product
        })
       
    }catch(error){
        console.log(error)
    }

}