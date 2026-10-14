import { Link, useRevalidator, useLoaderData, NavLink } from "react-router"
import NavBar from "./Navbar.jsx"
import menu from '../assets/menu.svg'
import { logout } from "../api/logout.js";
import { useState } from "react";
import {useClickOutside} from '../hooks/useClickOutside.jsx'

export default function Header({user}){

     const revalidator = useRevalidator()
      const cart = useLoaderData()?.cart
      
      const [showMenu, setShowMenu] = useState(false)
      const [account, setAccount] = useState(false)
    async function handleLogout(){
       
          try{
            const attempt = await logout()
            
            revalidator.revalidate()
            setAccount(false)

          }catch(error){
            console.log(error)
          }
     }

     async function toggle(){
        setShowMenu(prev => !prev)
     }

     const menuRef = useClickOutside(() => {
        setShowMenu(false)
     })

     const accountMenuRef = useClickOutside(() => {
        setAccount(false)
     })

     function handleProfile(){
          setAccount(prev => !prev)
     }
    
    return (
        <div className="header-container">
        <header>
            <div className="logo">
                
                <div className="box"></div>
              <Link to="/" viewTransition>
              <p className="logo-text">verde</p>
               </Link>
              </div>
             <nav>
               
             
        <ul className="nav-list">
            <li>
                <NavLink className={({isActive}) => isActive ? 'active-nav' : null} to="/shop" viewTransition>Shop</NavLink>
            </li>

            {user?.user && <li>
                <NavLink className={({isActive}) => isActive ? 'active-nav' : null} to="/orders" viewTransition>My orders</NavLink>
            </li>}

            {user?.user?.role === 'admin' && 
            <li>
                  <NavLink className="admin-link" to="/admin/dashboard" viewTransition>Admin</NavLink>
            </li>}

           {!user.user && <li>
                <NavLink className={({isActive}) => isActive ? 'active-nav' : null}  to='/login'>Login</NavLink>
            </li>}

          

            <li>
                <div className="cart-container">
                    <Link to="/cart" viewTransition>Cart</Link>
                    <p className="cart-count">{cart?.quantity || 0}</p>
                </div>
            </li>



            {user?.user && <li>
                <div onClick={handleProfile} className="profile">
                    <p>{user?.user?.username.charAt(0)}</p>
                </div>
                { account && 
                <div ref={accountMenuRef} className="account-menu">
                    <ul>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </ul>
                </div>}
            </li>}

            
        </ul>

        <div>
            <button
            onClick={toggle}
             className="menu-button">
                <img src={menu} />
            </button>
        </div>
        <div>
            
        </div>
        </nav>
        
        </header>
        {showMenu &&
        <div ref={menuRef} className="mobile-menu">
            <ul>
                <li>
                    <Link to="/" viewTransition>Home</Link>
                </li>
                <li>
                    <Link to="/shop" viewTransition>Shop</Link>
                </li>
                <li>
                    <Link to="/cart" viewTransition>Cart</Link>
                </li>
                <li>
                    <Link to="/login" viewTransition>Login</Link>
                </li>

                
            </ul>
        </div>}
        </div>
    )
}