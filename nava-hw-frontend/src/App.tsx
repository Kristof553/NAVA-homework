import React, {ChangeEvent, FC, useEffect, useState} from 'react';

const App: FC = () => {

    const BASE_API_ENDPOINT = "/picture"

    const [pictures, setPictures] = useState([])

    const getPictures = async () => {
        let data = await fetch(BASE_API_ENDPOINT)
        return await data.json()
    }

    useEffect(() => {
        getPictures()
            .then(res => console.log(res));
    }, [])

  return (
   <div>
       {pictures}
   </div>
  );
}

export default App;
