import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavScrollExample from './BasicExample';
import reportWebVitals from './reportWebVitals';
import Prti1 from './Prti1';
import About_me from './About_me';
import Exp  from './Exp';
import Certif from './Cer';
import Skills from './Skills';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Slider from 'react-slick';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavScrollExample />
    <Prti1/>
    <About_me/>
    <Exp></Exp>
    <Slider/>
    <Skills></Skills>
    <Certif></Certif>
    <Footer></Footer>
   
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
