import {Picture} from "../../Props";
import {useEffect, useState} from "react";
import {deletePicture, getFetch, increaseViews} from "../../Util";

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
            <td><button onClick={() => increaseViews(`/picture/increase_view/${pictureId}`)}>Inspect</button></td>
        </tr>


    )
}

export default PictureData;