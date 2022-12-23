import {Picture} from "../../Util/Props";
import {useEffect, useState} from "react";
import {deletePicture, getFetch, increaseViews} from "../../Util/Fetch";
import { Link } from "react-router-dom";

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






    return(
        <tr>
            <td>{element.picture.name}</td>
            <td>{element.picture.creator}</td>
            <td>{views}</td>
            <td><button onClick={() => deletePicture(`/picture/${pictureId}`)}>Delete</button></td>
            <td><button onClick={() => edit()}>Edit</button></td>
            <td><Link to={`/inspect-picture/${pictureId}`}>Inspect</Link></td>
        </tr>


    )
}

export default PictureData;