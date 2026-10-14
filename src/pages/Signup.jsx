import { Form, Link, useActionData, useNavigation } from "react-router";

export default function Signup(){

     const state = useNavigation()?.state
    const error = useActionData()
   
    return(
        <section className="container">
          <Form method="POST" replace>
         <div className="signup-form">
            <div className="greeting-container">
               <h2>Create account</h2>
               <p>Sign up to start shopping</p>
            </div>
            
            <label htmlFor="username">Username</label>
            <input id="username" name="username" placeholder="Enter your username" required/>

            <label htmlFor="email">Email</label>
            <input type="email" 
            id="email"
             name="email"
              placeholder="you@example.com" required/>

              <label htmlFor="password">Password</label>
            <input type="password" 
            id="password"
             name="password"
              placeholder="Enter your password" required/>
            {error && 
            <div className="error-container">
                <p>{error?.error}</p>
            </div>}
            <button 
            disabled={state !== 'idle'}
            className="signup-button">
                {state !== 'idle'? 'Creating account...': "Create account"}
            </button>
            <div className="reroute-container">
                <p 
            id="reroute-text">
                Already have an account? <Link to="/login">Log in</Link>
            </p>
            </div>
            
         </div>
         </Form>
        </section>
    )
}