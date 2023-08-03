import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import ListUser from '../components/user/ListUser';

const Users = () => {

   // Reset the scroll position to top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <ListUser />      
    </Layout>
  )
}

export default Users
