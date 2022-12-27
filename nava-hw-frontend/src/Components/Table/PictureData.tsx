import {Picture} from "../../Util/Props";
import {useEffect, useState} from "react";
import {deletePicture, getFetch, increaseViews} from "../../Util/Fetch";

interface DataProps{
    picture:Picture
    setName:(name:string) => void
    setCreator:(name:string) => void
    setPictureId:(picture_is:number) => void
}

const PictureData = (element: DataProps) =>{

    const pictureId = element.picture.picture_id

    const [views, setViews] = useState([])

    useEffect(() => {
        getFetch(`/picture/views/${pictureId}`)
            .then(res => setViews(res));
    }, [])


    const edit = () =>{
        element.setPictureId(element.picture.picture_id)
        element.setName(element.picture.name)
        element.setCreator(element.picture.creator)
    }

    const handleViewCount = () =>{
        increaseViews(`/picture/increase_view/${pictureId}`).then(r => console.log("view increase"))
    }


    return(
        <tr>
            <td>{element.picture.name}</td>
            <td>{element.picture.creator}</td>
            <td>{views}</td>
            <td><button onClick={() => deletePicture(`/picture/${pictureId}`)}>Delete</button></td>
            <td><button onClick={() => edit()}>Edit</button></td>
            <td><a onClick={() => handleViewCount()} href={`/inspect-picture/${pictureId}`}>Inspect</a></td>
        </tr>


    )
}

export default PictureData;