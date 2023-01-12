import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
<<<<<<< HEAD
import './index.css'
import {CovidDataProvider} from './context/contextApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CovidDataProvider>
    <App />
  </CovidDataProvider>
=======
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
>>>>>>> 147ecca (initial commit)
  </React.StrictMode>,
)
