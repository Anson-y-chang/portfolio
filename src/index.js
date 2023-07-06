import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Weather from './Weather'
// import Person from './Person';
// import Demo from './Demo';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Person name="Jill"/> */}
      {/* <Demo></Demo> */}
    </BrowserRouter>
  // </React.StrictMode>
);


