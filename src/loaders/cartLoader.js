import {getCartItems} from '../api/getCartItems.js'

export async function cartLoader(){
    
    return {
        cart: getCartItems()
    }
}