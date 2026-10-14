

export async function deleteProduct(id){
    
    const res = await fetch(`/api/admin/products/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if(!res.ok){
        const error = await res.json()
       
        return error
    }

    const success = await res.json()
  
    return success
}