import { Picture} from "../../Props";
import PictureData from "./PictureData";

interface ElementProps{
    picture: Picture[]
    setName:(name:string) => void
    setCreator:(name:string) => void
    setPictureId:(picture_is:number) => void
}

const TableElement = (element: ElementProps ) =>{


    const allPictures = element.picture.map((picture) =>
        <PictureData
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