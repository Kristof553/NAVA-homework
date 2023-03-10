import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InspectPicture from "./Components/InspectPicture";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<App/>}/>
          <Route path={`/inspect-picture/:picture_id`} element={<InspectPicture/>}/>
      </Routes>
  </BrowserRouter>
);


