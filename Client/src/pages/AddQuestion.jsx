import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Add from '../components/QuestionsContainer/Add'

const AddQuestion = () => {
       
   // Reset the scroll position to top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    return (
        <Layout>
            <Add />
        </Layout>
    )
}

export default AddQuestion
