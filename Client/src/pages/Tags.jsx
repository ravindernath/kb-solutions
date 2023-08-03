import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import TagList from '../components/TagsContainer/TagList'

const Tags = () => {

    
   // Reset the scroll position to top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <TagList />
    </Layout>
  )
}

export default Tags
