

export async function getFeatured(){
    const res = await fetch(`/api/featured`)

    if(!res.ok){
        console.log(res?.statusText)
    }

    const success = await res.json()
    
    return success
}