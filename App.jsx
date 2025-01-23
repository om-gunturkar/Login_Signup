
import React from 'react';
import SignUPform from './SignUPform';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUPform/>}/>
      <Route path="/signup" element={<SignUPform/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
