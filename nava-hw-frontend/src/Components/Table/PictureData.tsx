import {DataProps} from "../../Util/Props";
import {useEffect, useState} from "react";
import {deleteFetch, getFetch, increaseViewsFetch} from "../../Util/Fetch";

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
        increaseViewsFetch(`/picture/increase_view/${pictureId}`).then(r => console.log("view increase"))
    }

    return(
        <tr className="table-row">
            <td className="table-data" width={20}>{element.picture.name}</td>
            <td className="table-data" width={20}>{element.picture.creator}</td>
            <td className="table-data" width={20}>{views}</td>
            <td className="table-data" width={20}><button
                onClick={() => deleteFetch(`/picture/${pictureId}`)}
                className="button">Delete</button>
            </td>
            <td className="table-data" width={20}><button
                onClick={() => edit()} className="button">Edit</button>
            </td>
            <td className="table-data" width={20}><button
                className="button"><a
                onClick={() => handleViewCount()}
                href={`/inspect-picture/${pictureId}`}
                style={{ textDecoration: 'none', color: 'black' }}>Inspect</a></button>
            </td>
        </tr>
    )
}

export default PictureData;