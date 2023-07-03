import React from 'react'
import PropTypes from 'prop-types';
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='overflow-hidden'>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
};
export default Layout
