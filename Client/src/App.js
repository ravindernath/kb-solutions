import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Index from './pages/index'
import LoginPage from './pages/LoginPage';
import Error404 from './pages/Error404';
import Dashboard from './pages/Admin/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="Login" element={<LoginPage />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
