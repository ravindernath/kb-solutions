import React from 'react'
import Routers from './router/Routers'
import { BrowserRouter } from 'react-router-dom'
import DetailProvider from './context/DetailProvider';

const App = () => {
  return (
    <BrowserRouter>
      <DetailProvider>
        <Routers />
      </DetailProvider>
    </BrowserRouter>
  )
}

export default App
