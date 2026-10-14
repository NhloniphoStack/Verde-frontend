import { getProduct } from "../api/getProduct.js";


export async function productDetailsLoader({params}){
    
     return {
        product: getProduct(params?.id)
     }
}