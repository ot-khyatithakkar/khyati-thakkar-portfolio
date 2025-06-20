import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './CSS/index.scss'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
