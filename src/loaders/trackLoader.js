import { getOrder } from "../api/getOrder.js"

export async function trackLoader({request}){
    const url = new URL(request?.url)

    const params = url?.searchParams
    
   
    return {
        order: getOrder(params?.toString())
    }
}