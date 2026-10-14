import { redirect } from "react-router"
import { sendOrder } from "../api/sendOrder"


export async function checkOutAction(){
           
    try{
        
        const attempt = await sendOrder()

        
        if(attempt.error){
          return redirect(`/cancelled`)
        }
        
        return redirect(`/orders/${attempt.order.id}`)
        

    }catch(error){
       return redirect(`/cancelled`)
        
    }

}