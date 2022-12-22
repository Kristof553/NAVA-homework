import {Picture} from "./PictureProp";
import {useEffect, useState} from "react";


const PictureData = ({picture_id,name, creator}: Picture) =>{

    const [views, setViews] = useState([])

    const getViews = async () => {
        let data = await fetch(`/picture/views/${picture_id}`)
        return await data.json()
    }

    useEffect(() => {
        getViews()
            .then(res => setViews(res));
    }, [])

    return(
        <tr>
            <td>{name}</td>
            <td>{creator}</td>
            <td>{views}</td>
        </tr>


    )
}

export default PictureData;