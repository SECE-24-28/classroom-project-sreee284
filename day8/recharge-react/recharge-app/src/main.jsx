import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import './index.css'

// Simple router
const path = window.location.pathname;

let ComponentToRender = App;

if (path === '/login') {
  ComponentToRender = Login;
} else if (path === '/signup') {
  ComponentToRender = Signup;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponentToRender />
  </React.StrictMode>,
)