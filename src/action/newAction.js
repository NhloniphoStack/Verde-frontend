import { addNewProduct } from "../api/addNewProduct.js";

export async function newAction({request}){
    const formData = await request.formData()
    
    try{
        const attempt = await addNewProduct(formData)
    }catch(error){
        console.log(error)
    }
}