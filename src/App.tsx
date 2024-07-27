// src/App.tsx
import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

// const Home = lazy(() => import('./pages/Home'))
// const Login = lazy(() => import('./pages/Login'))
// const Register = lazy(() => import('./pages/Register'))

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
