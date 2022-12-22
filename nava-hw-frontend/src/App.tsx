import React, {FC} from 'react';
import PictureTable from "./Components/Table/PictureTable";
import AddPicture from "./Components/Form/AddPicture";

const App: FC = () => {

    return (
        <div>
            <AddPicture/>
            <PictureTable/>
        </div>

  );
}

export default App;
