import React from "react";
import {editPictureFetch, postFetch} from "../../Util/Fetch";

interface Props{
    name:string
    creator:string
    setName:(name: string) => void
    setCreator:(creator: string) => void
    picture_id:number
}

const Form = ({name, creator, setName, setCreator, picture_id}:Props) => {


    const addPicture = (e: any) => {
        e.preventDefault()
        postFetch({name, creator}).then(r => console.log(r))
        window.location.reload()
    }

    const editPicture = (e: any) =>{
        e.preventDefault()
        editPictureFetch(`/picture/${picture_id}`, {name, creator}).then(r => console.log(r))
        window.location.reload()
    }

    const handleNameChange = (event: any ) =>{
        setName(event.target.value)
    }

    const handleCreatorChange = (event: any) =>{
        setCreator(event.target.value)
    }

    return(
        <div className="form-container">
            <form onSubmit={addPicture}>
                <input type={"text"}
                       placeholder={"Picture name"}
                       value={name} name={"picture_name"}
                       onChange={handleNameChange}/>
                <input
                    type={"text"}
                    placeholder={"Creator name"}
                    value={creator} name={"picture_creator"}
                    onChange={handleCreatorChange}/>
                <input
                    type={"submit"}
                    value={"Add picture"}
                    className="form-button"/>
                <button onClick={editPicture} className="form-button">Edit</button>
            </form>
        </div>
    )
}

export default Form;