import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import TableElement from "./TableElement";

const PictureTable: FC = () => {

    const BASE_API_ENDPOINT = "/picture";

    const [pictures, setPictures] = useState([])


    const getPictures = async () => {
        let data = await fetch(BASE_API_ENDPOINT)
        return await data.json()
    }


    useEffect(() => {
        getPictures()
            .then(res => setPictures(res));
    }, [])

    const allPictures = pictures === undefined ? "loading..." : <TableElement picture={pictures}/>

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Creator</th>
                        <th>Views</th>
                    </tr>
                </thead>
                {allPictures}
            </table>

        </div>
    );
}

export default PictureTable;