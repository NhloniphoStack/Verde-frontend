import { addItemToCart } from "../api/addItemToCart";

export async function shopAction({request}){

    const formData = await request.formData()

    const product = formData.get("productid")
    
    try{
        const attempt = await addItemToCart({
            productid: product,
        })

        

    }catch(error){
        console.log(error)
    }

}