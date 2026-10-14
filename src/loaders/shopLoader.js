import { getProducts } from "../api/getProducts"

export async function shopLoader(){
    return {
        products: getProducts()
    }
}