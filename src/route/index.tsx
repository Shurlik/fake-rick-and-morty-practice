import * as React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../screens/home";
import Details from "../screens/details";

const Router = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<Home/>}
      />
      <Route
        path={'/character/:id'}
        element={<Details/>}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}


export default Router
