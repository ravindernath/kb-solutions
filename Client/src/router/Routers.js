import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import your authentication logic (you might have it in a separate file)
import { DetailState  } from '../context/DetailProvider';

import Home from '../pages/Home';
import KnowledgeBase from '../pages/KnowledgeBase';
import Tags from '../pages/Tags';
import Users from '../pages/Users';
import Error404 from '../pages/Error404';
import LoginPage from '../pages/LoginPage'
import AddQuestion from '../pages/AddQuestion';
import ViewQuestion from '../pages/ViewQuestion';


// Custom protected route component
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = DetailState();

  // If the user is logged in, render the provided component, otherwise redirect to login
  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/kb" element={<KnowledgeBase />} /> */}
      {/* <Route path="/tags" element={<Tags />} /> */}
      {/* <Route path="/users" element={<Users />} /> */}
      {/* <Route path="/add-question" element={<AddQuestion />} /> */}
      <Route path="/question" element={<ViewQuestion />} />

      <Route path="/*" element={<Error404 />} />

      {/* Use the custom ProtectedRoute for the Users page */}
      <Route path="/users" element={<ProtectedRoute component={Users} />} />
      <Route path="/kb" element={<ProtectedRoute component={KnowledgeBase} />} />
      <Route path="/tags" element={<ProtectedRoute component={Tags} />} />
      <Route path="/add-question" element={<ProtectedRoute component={AddQuestion} />} />



    </Routes>
  )
}

export default Routers
