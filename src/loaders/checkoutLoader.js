import { getCartItems } from "../api/getCartItems.js"

export async function checkoutLoader(){
    return {
        items: getCartItems()
    }
}