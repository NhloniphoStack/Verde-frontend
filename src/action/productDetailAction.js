import { addItemToCart } from "../api/addItemToCart.js";



export async function productDetailAction({request}){
    const formData = await request.formData()
  
    try{

        const attempt = await addItemToCart({
            productid: formData.get("productid"),
            quantity: formData.get("quantity")
        })

    }catch(error){
        console.log(error)
    }
}