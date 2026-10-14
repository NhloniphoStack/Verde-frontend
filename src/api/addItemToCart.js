
export async function addItemToCart(item){
    
    const res = await fetch(`/api/cart`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })

    if(!res.ok){
        const error = await res.json()
        
        return error
    }

    const success = await res.json()
    
    return success
}