import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import KnowledgeBase from '../pages/KnowledgeBase';
import Tags from '../pages/Tags';
import Users from '../pages/Users';
import Error404 from '../pages/Error404';
import LoginPage from '../pages/LoginPage'
import AddQuestion from '../pages/AddQuestion';
import ViewQuestion from '../components/QuestionsContainer/ViewQuestion';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/kb" element={<KnowledgeBase />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/users" element={<Users />} />
      <Route path="/add-question" element={<AddQuestion />} />
      <Route path="/question" element={<ViewQuestion />} />

      <Route path="/*" element={<Error404 />} />
    </Routes>
  )
}

export default Routers
