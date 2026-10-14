
export async function getCartItems(){
    const res = await fetch(`/api/cart`, {
        method: 'GET',
        credentials: 'include',
        headers:{
            'Content-Type': 'application/json'
        }
    })

    if(!res.ok){
        console.log(res?.statusText)
    }

    const success = await res.json()
   
    return success
}