import {useParams} from "react-router-dom";
import {getFetch} from "../Util/Fetch";
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
            <h1>Name:</h1>
            <p>{pictureData?.name}</p>
            <h1>Creator:</h1>
            <p>{pictureData?.creator}</p>
        </div>
    )
}

export default InspectPicture;