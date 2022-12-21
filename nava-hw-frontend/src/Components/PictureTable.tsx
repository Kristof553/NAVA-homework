import React, {ChangeEvent, FC, useEffect, useState} from 'react';

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

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Creator</th>
                </tr>
                <tr>
                    {pictures.map(({id, name}: any) => {
                        return <td key={id}>{name}</td>
                    })}
                    {pictures.map(({id, creator}: any) => {
                        return <td key={id}>{creator}</td>
                    })}
                </tr>

            </table>

        </div>
    );
}

export default PictureTable;