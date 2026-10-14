import { Form, Link, useActionData, useNavigation, useSearchParams } from "react-router";

export default function Login(){
    const state = useNavigation()?.state
    const error = useActionData()
    const [searchParams, setSearchParams] = useSearchParams()
    const message = searchParams.get("message")
    return (
        <section className="container">
        <Form method="POST" replace>
         <div className="login-form">
            <div className="greeting-container">
                {message && <h3 id="message">{message}</h3>}
               <h2>Welcome back</h2>
               <p>Log in to your account</p>
            </div>
            
            <label htmlFor="username">Username</label>
            <input id="username" name="username" placeholder="Enter your username" required/>

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
            className="login-button">
                {state !== 'idle'? 'Loggin in...': "Log in"}
            </button>
            <div className="reroute-container">
                <p 
            id="reroute-text">
                New to verde? <Link to="/signup">Sign up</Link>
            </p>
            </div>
            
         </div>
         </Form>
        </section>
    )
}