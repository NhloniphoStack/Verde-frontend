


export async function getProducts(){
    const res = await fetch(`/api/products`)

    if(!res.ok){
        console.log(res?.statusText)
    }

    const success = await res.json()
    console.log(success)
    return success
}