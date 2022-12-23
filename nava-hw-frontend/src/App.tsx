import React, {FC, useState} from 'react';
import Form from "./Components/Form/Form";
import {Picture} from "./Util/Props";
import PictureTable from "./Components/Table/PictureTable";



const App: FC = () => {

    const [name, setName] = useState<string>("")

    const [creator, setCreator] = useState<string>("")

    const [picture_id, setPictureId] = useState<number>(0)

    const [pictures, setPictures] = useState<Picture[]>([])

    return (
        <div>
            <Form name={name}
                  setName={setName}
                  creator={creator}
                  setCreator={setCreator}
                  picture_id={picture_id}
            />
            <PictureTable
                picture={pictures}
                setPictures={setPictures}
                setPictureId={setPictureId}
                setCreator={setCreator}
                setName={setName}/>
        </div>

  );
}

export default App;
