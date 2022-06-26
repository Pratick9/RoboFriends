import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';


//old api --difference --check url -- https://github.com/reactwg/react-18/discussions/5



ReactDOM.render(<App/>,  document.getElementById('root'));

//NEW api -- In this you have to write 
//import ReactDOM from 'react-dom/client';

//only client part is the changes 


// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Card/>);
  reportWebVitals();