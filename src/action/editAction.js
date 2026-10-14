import { editProduct } from "../api/editProduct.js"
export async function editAction({request, params}){
    const formData = await request.formData()
    
    try{
        const attempt = await editProduct({
            title: formData.get("title"),
            price: formData.get("price"),
            category: formData.get("category"),
            stock: formData.get("stock"),
            id: params.id,
            description: formData.get("description"),
        })

        

    }catch(error){
        console.log(error)
    }
}