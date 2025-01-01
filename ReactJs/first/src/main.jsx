import React from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Comp from './comp.jsx';

const element = React.createElement('p',{href:"www.google.com",target:"_blank"},'Hello world')  //first is the tag ,second is the attributes ,third is the innerHTML or text

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    /* <App/>
    <Comp/> */
    element
  // </React.StrictMode>
)
