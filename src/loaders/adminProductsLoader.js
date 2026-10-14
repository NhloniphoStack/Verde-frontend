import { getAdminProducts } from "../api/getAdminProducts.js"

export default function adminProductsLoader(){
    return{
        products: getAdminProducts()
    }
}