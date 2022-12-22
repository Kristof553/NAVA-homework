import React from "react";
import {postFetch} from "../../Util";

interface Props{
    name:string
    creator:string
    setName:(name: string) => void
    setCreator:(creator: string) => void
}

const Form = ({name, creator, setName, setCreator}:Props) => {


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
                <label>
                    Name
                </label>
                <input type={"text"}
                       placeholder={"Picture name"}
                       value={name} name={"picture_name"}
                       onChange={handleNameChange}/>
                <label>
                    Creator
                </label>
                <input
                    type={"text"}
                    placeholder={"Creator name"}
                    value={creator} name={"picture_creator"}
                    onChange={handleCreatorChange}/>
                <input
                    type={"submit"}
                    value={"Add picture"}/>
                <button>Edit</button>
            </form>
        </div>
    )
}

export default Form;