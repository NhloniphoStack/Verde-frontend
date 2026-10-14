
import { getCartItems } from "../api/getCartItems.js";
import { getUser } from "../api/getUser";


export async function layoutLoader(){
    
    
    const user = await getUser()

    if(user?.error){
        
        return {
            user: null
        }
    }

    console.log(user)

   return {
    user: user,
    cart: await getCartItems()
   }
}