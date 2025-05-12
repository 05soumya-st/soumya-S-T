import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './Product';
import Card1 from './Card1';
import Card3 from './Card3';
import Card4 from './Card4';
import Counter from './Counter';
import OnOff from './OnOff';
import NameChanger from './NameChanger';
import DelayedAlert from './DelayedAlert';


import Routerex from './Routerex'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<div className='wrapper'>
    <Card1/>
    <Card/>
    <Card3/>
    <Card4/>
    
    </div>*/}
    {/*<Counter/>*/}
    {/*<OnOff/>*/}
    {/*<NameChanger/>*/}
    <DelayedAlert/>

   { /*<Routerex/>*/}
    
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
