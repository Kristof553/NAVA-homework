export const postFetch = async (payload: any) => {
    await fetch(`/picture`, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}

export const getFetch = async (url: string) => {
    let data = await fetch(url)
    return await data.json()
}

export const deletePicture = async (url: string) =>{
    await fetch(url, {
        method: 'DELETE',
    })
    window.location.reload()
}

export const increaseViews = async (url: string) =>{
    await fetch(url, {
        method: 'PUT'
    })
    window.location.reload()
}