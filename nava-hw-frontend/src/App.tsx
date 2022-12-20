import React, {ChangeEvent, FC, useEffect, useState} from 'react';

const App: FC = () => {

    useEffect(() => {
        fetch("http://localhost:8080/")
            .then(response => response.json())
            .then(res => console.log(res))
    }, [])

  return (
   <div>
        NAVA
   </div>
  );
}

export default App;
