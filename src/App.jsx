import {createBrowserRouter,
   RouterProvider,
    Route,
    createRoutesFromElements
  } from 'react-router'

import Home from './pages/Home.jsx'
import Layout from './layouts/Layout.jsx'
import { homeLoader } from './loaders/homeLoader.js'
import Shop from './pages/Shop.jsx'
import { shopLoader } from './loaders/shopLoader.js'
import Login from './pages/Auth/Login.jsx'
import { loginAction } from './action/loginAction.js'
import { layoutLoader } from './loaders/layoutLoader.js'
import Cart from './pages/Cart.jsx'
import { requireAuth } from './util/requireAuth.js'
import { cartLoader } from './loaders/cartLoader.js'
import { cartAction } from './action/cartAction.js'
import { shopAction } from './action/shopAction.js'
import CheckOut from './pages/CheckOut.jsx'
import { checkoutLoader } from './loaders/checkoutLoader.js'
import ProductDetails from './pages/ProductDetails.jsx' 
import { productDetailsLoader } from './loaders/productDetailsLoader.js'
import { productDetailAction } from './action/productDetailAction.js'
import Loading from './pages/Loading.jsx'
import { checkOutAction } from './action/checkOutAction.js'
import Order from './pages/Order.jsx'
import { orderLoader } from './loaders/orderLoader.js'
import OrderCancelled from './components/OrderCancelled.jsx'
import Admin from './pages/Admin.jsx'
import { adminAuth } from './util/adminAuth.js'
import { adminLoader } from './loaders/adminLoader.js'
import { New } from './pages/New.jsx'
import { newAction } from './action/newAction.js'
import AdminLayout from './components/AdminLayout.jsx'
import Products from './pages/Products.jsx'
import Edit from './pages/Edit.jsx'
import { editAction } from './action/editAction.js'
import { editLoader } from './loaders/editLoader.js'
import adminProductsLoader from './loaders/adminProductsLoader.js'
import { adminProductsAction } from './action/adminProductsAction.js'
import Error from './pages/Error.jsx'
import MyOrder from './pages/MyOrders.jsx'
import { myOrderLoader } from './loaders/myOrderLoader.js'
import NotFound from './pages/NotFound.jsx'
import Signup from './pages/Signup.jsx'
import { signupAction } from './action/signupAction.js'
const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='' element={<Layout />} loader={layoutLoader} errorElement={<Error />}>
    <Route path='*' element={<NotFound />} />
     <Route path="" element={<Home />} loader={homeLoader}/>
     <Route path="/shop" element={<Shop />} loader={shopLoader} action={shopAction}/>
     <Route path="login" element={<Login />} action={loginAction}/>
     <Route path="signup" element={<Signup />} action={signupAction}/>
     <Route path="/cart" element={<Cart />} loader={cartLoader} middleware={[requireAuth]} action={cartAction}/>
     <Route path="/checkout" element={<CheckOut />} middleware={[requireAuth]} loader={checkoutLoader} action={checkOutAction}/>
     <Route path="/:id" element={<ProductDetails />} loader={productDetailsLoader} action={productDetailAction}/>
     <Route path="/orders/:id" element={<Order />}  loader={orderLoader} middleware={[requireAuth]}/>
     <Route path="/cancelled" element={<OrderCancelled />} middleware={[requireAuth]}/>
     <Route path="/admin" element={<AdminLayout />} middleware={[requireAuth]}>
       <Route path="dashboard" element={<Admin />}  middleware={[adminAuth]} loader={adminLoader}/>
        <Route path="products" element={<Products />}  middleware={[adminAuth]} loader={adminProductsLoader} action={adminProductsAction}/>
       
     </Route>
     <Route path='/orders' element={<MyOrder />}  middleware={[requireAuth]} loader={myOrderLoader}/>
     
      <Route path="/admin/products/:id" element={<Edit />} middleware={[adminAuth]} action={editAction} loader={editLoader}/>
     <Route path="/admin/new" element={<New />} middleware={[adminAuth]} action={newAction}/>
  </Route>
  </>
))

function App() {
  return (
   <RouterProvider router={router} />
  )
}

export default App
