

export async function addNewProduct(formData){
   
    const res = await fetch(`/api/admin/products`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })

    if(!res.ok){
        const error = await res.json()
        
        return error
    }

    const success = await res.json()
    
    return success
}