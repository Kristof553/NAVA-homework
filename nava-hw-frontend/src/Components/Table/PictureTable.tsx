import React, {useEffect} from 'react';
import TableElement from "./TableElement";
import {getFetch} from "../../Util/Fetch";
import {TableProps} from "../../Util/Props";


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
        <div className="table-container">
            <table className="table">
                <thead className="table-header">
                <tr className="table-row-header">
                    <th className="header__item">Name</th>
                    <th className="header__item">Creator</th>
                    <th className="header__item">Views</th>
                    <th className="header__item">Delete picture</th>
                    <th className="header__item">Edit picture</th>
                    <th className="header__item">Inspect picture</th>
                </tr>
                </thead>
                {allPictures}
            </table>

        </div>
    );
}

export default PictureTable