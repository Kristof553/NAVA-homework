import {ElementProps} from "../../Util/Props";
import PictureData from "./PictureData";

const TableElement = (element: ElementProps ) =>{

    const allPictures = element.picture.map((picture) =>
        <PictureData
            key={picture.picture_id}
            picture={picture}
            setPictureId={element.setPictureId}
            setCreator={element.setCreator}
            setName={element.setName}
        />)

    return(
        <tbody>
            {allPictures}
        </tbody>
    )
}

export default TableElement;