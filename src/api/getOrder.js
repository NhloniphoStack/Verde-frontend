

export async function getOrder(query){
    const res = await fetch(`/api/order?${query}`, {
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