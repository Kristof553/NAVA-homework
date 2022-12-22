import {Picture} from "./PictureProp";
import PictureData from "./PictureData";

interface Props{
    picture: Picture[]
}

const TableElement = ({picture}: Props) =>{

    const allPictures = picture.map((picture) =>
        <PictureData name={picture.name} creator={picture.creator} picture_id={picture.picture_id}/>)

    return(
        <tbody>
            {allPictures}
        </tbody>


    )
}

export default TableElement;