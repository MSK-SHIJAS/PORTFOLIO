import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Navbars from './Navbars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Navbars />}>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
