import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //imported browser router from react-router-dom and fixed the app as children of a browser router
  <BrowserRouter>
  <App />
  </BrowserRouter>,
)
