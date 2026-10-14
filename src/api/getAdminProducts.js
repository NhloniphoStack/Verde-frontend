


export async function getAdminProducts(id){
    const res = await fetch(`/api/admin/products`, {
        method:'GET',
        credentials: 'include'
    })

    if(!res.ok){
        console.log(res?.statusText)
    }

    const success = await res.json()
    
    return success
}