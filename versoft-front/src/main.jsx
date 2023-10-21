import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from '../redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>{/*estado global, donde se guardara la info*/}
    <BrowserRouter>{/*enrutador del proyecto, permite el uso de rutas*/}
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
