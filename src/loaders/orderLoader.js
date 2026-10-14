import { getSingleOrder } from "../api/getSingleOrder.js";


export async function orderLoader({params}){
   
    return {
        order: getSingleOrder(params?.id)
    }

}