import './styles.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import { AuthProvider } from './context/AuthContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
