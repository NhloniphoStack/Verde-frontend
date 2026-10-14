import { deleteProduct } from "../api/deleteProduct"



export async function adminProductsAction({request}){
    const formData = await request.formData()
    const id = formData.get("id")
    try{

        const attempt = await deleteProduct(id)
        

    }catch(error){
        console.log(error)
    }
}