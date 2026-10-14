import { NavLink, Outlet } from "react-router"

export default function AdminLayout(){
    return(
        <div className="admin-layout-container">
        <div className="admin-panel">
            <ul className="admin-list">
                <li>
                    <NavLink className={({isActive}) => isActive ? "activeNav" : null} to="/admin/dashboard" viewTransition replace>Dashboard</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive}) => isActive ? "activeNav" : null} to="/admin/products" viewTransition>Products</NavLink>
                </li>
            </ul>
        </div>
        <div>
            {<Outlet />}
        </div>
        </div>
    )
}