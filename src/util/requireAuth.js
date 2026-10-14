import { redirect } from "react-router";
import { getUser } from "../api/getUser";


export async function requireAuth(){
    
    const user = await getUser()
  

    if(user.error){
        return redirect('/login?message=Please log in')
    }

    return null
}