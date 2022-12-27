import React, { FC, useEffect, useState} from 'react';
import TableElement from "./TableElement";
import {getFetch} from "../../Util/Fetch";
import {Picture} from "../../Util/Props";

interface TableProps{
    picture:Picture[]
    setPictures:(picture: Picture[]) => void
    setName:(name:string) => void
    setCreator:(name:string) => void
    setPictureId:(picture_is:number) => void
}

const PictureTable = (pictures:TableProps) => {

    useEffect(() => {
        getFetch(`/picture`)
            .then(res => pictures.setPictures(res));
    }, [])

    const allPictures = pictures === undefined ? "loading..." : <TableElement
        picture={pictures.picture}
        setPictureId={pictures.setPictureId}
        setName={pictures.setName}
        setCreator={pictures.setCreator}/>

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

export default PictureTable