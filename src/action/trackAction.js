import { getSingleOrder } from "../api/getSingleOrder.js";


export async function trackAction({request}){
    const formData = await request.formData()
    const orderid = formData.get("id")
   
    try{
        const attempt = await getSingleOrder(orderid)
       
        return attempt
    }catch(error){
        console.log(error)
    }
}