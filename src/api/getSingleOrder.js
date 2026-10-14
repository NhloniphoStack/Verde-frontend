


export async function getSingleOrder(id){
    
    const res = await fetch(`/api/order/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(!res.ok){
        const error = await res.json()
       
        return error
    }

    const success = await res.json()
  
    return success
}