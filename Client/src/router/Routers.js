import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import APage from '../pages/APage';
import BPage from '../pages/BPage';
import CPage from '../pages/CPage';
import Error404 from '../pages/Error404';
import LoginPage from '../pages/LoginPage'


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/apage" element={<APage />} />
      <Route path="/bpage" element={<BPage />} />
      <Route path="/cpage" element={<CPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/*" element={<Error404 />} />
    </Routes>
  )
}

export default Routers
