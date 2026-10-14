import { getAdminOrders } from "../api/getAdminOrders.js"

export async function adminLoader(){
    return{
        orders: getAdminOrders()
    }
}