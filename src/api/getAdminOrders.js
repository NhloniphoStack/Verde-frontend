

export async function getAdminOrders(){
    const res = await fetch(`/api/admin/orders`, {
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
    console.log(success)
    return success
}