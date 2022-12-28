import {useParams} from "react-router-dom";
import {getFetch, increaseViews} from "../Util/Fetch";
import {useEffect, useState} from "react";
import {Picture} from "../Util/Props";


const InspectPicture = () => {

    const {picture_id} = useParams()

    const [pictureData, setPictureData] = useState<Picture>()

    useEffect(() =>{
        getFetch(`/picture/${picture_id}`).then(r => setPictureData(r))
    }, [])


    return(
        <div className="picture-data">
            <h1>{pictureData?.name}</h1>
            <h1>{pictureData?.creator}</h1>
        </div>
    )
}

export default InspectPicture;