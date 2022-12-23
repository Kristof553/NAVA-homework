import {useParams} from "react-router-dom";
import {increaseViews} from "../Util/Fetch";


const Picture = () => {

    const {picture_id} = useParams()

    //increaseViews(`/picture/increase_view/${picture_id}`).then(r => console.log(r))

    return(
        <div>
            <h1>{picture_id}</h1>
            <h1>hallo</h1>
        </div>
    )
}

export default Picture;