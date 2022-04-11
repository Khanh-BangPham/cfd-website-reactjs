import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux'
import store from './stores'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <AuthProvider> */}
        <App />
        {/* </AuthProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
