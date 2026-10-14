import { redirect } from "react-router"
import { login } from "../api/login.js"

export async function loginAction({request}){
    const formData = await request.formData()
      
    try{
        const attempt = await login({
            username: formData.get("username"),
            password: formData.get("password")
          
        })

        if(attempt?.error){
            return attempt
        }

        

        return redirect('/')
    }catch(error){
        return error
    }
}