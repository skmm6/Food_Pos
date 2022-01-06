import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fontello-3945db0e/css/fontello.css';
import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux";



ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <div className=" bg-gray-700 h-screen">
      <App />
    </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

