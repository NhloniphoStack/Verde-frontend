import { getOrder } from "../api/getOrder.js"

export async function myOrderLoader({request}){
    const url = new URL(request?.url)

    const params = url?.searchParams
   
   
    return {
        order: getOrder(params?.toString())
    }
}