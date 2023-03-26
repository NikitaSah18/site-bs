import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./Footer";
import NaviBar from './NaviBar';
import Switch from '@mui/material/Switch';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';




import { Form1 } from './Form1';
import { Home } from './Home';
import { Company } from './Company';
import { Credits } from './Credits';

function App() {
  return (
    <>


      <BrowserRouter>
        <NaviBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Credits" element={<Credits />} />
          <Route path="/Form" element={<Form1 />} />
        </Routes>
      </BrowserRouter>

      <Footer/>
    </>

  );
}

export default App;