

import { redirect } from "react-router"
import { signup } from "../api/signup.js"

export async function signupAction({request}){
    const formData = await request.formData()
      
    try{
        const attempt = await signup({
            username: formData.get("username"),
            email: formData.get("email"),
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