import { getSingleProduct } from "../api/getSingleProduct.js"

export async function editLoader({params}){
  
    return{
        product: getSingleProduct(params.id)
    }
}