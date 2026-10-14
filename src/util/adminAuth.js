

import { redirect } from "react-router";
import { getUser } from "../api/getUser";


export async function adminAuth(){
    
    const user = await getUser()
    

    if(user?.error){
        return redirect('/login?message=Please log in')
    }

    if(user?.role !== 'admin'){
        return redirect('/shop')
    }

    return null
}