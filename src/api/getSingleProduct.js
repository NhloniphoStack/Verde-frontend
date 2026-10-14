

export async function getSingleProduct(id){
    const res = await fetch(`/api/products/${id}`)

    if(!res.ok){
        console.log(res?.statusText)
    }

    const success = await res.json()
  
    return success
}