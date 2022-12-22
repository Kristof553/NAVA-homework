import React, { useState} from "react";


const AddPicture = () => {

    const [name, setName] = useState([])

    const [creator, setCreator] = useState([])

    const postFetch = async (payload: any) => {
        const data = await fetch(`/picture`, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

    }

    const addPicture = (e: any) => {
        e.preventDefault()
        postFetch({name, creator}).then(r => console.log(r))
        window.location.reload()
    }

    const handleNameChange = (event: any ) =>{
        setName(event.target.value)
    }

    const handleCreatorChange = (event: any) =>{
        setCreator(event.target.value)
    }

    return(
        <div>
            <form onSubmit={addPicture}>
                <label>Name</label>
                <input type={"text"} placeholder={"Picture name"} name={"picture_name"} onChange={handleNameChange}/>
                <label>Creator</label>
                <input type={"text"} placeholder={"Creator name"} name={"picture_creator"} onChange={handleCreatorChange}/>
                <input type={"submit"}/>
            </form>
        </div>
    )
}

export default AddPicture;