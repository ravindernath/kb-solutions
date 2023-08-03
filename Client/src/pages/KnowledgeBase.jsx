import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Search from '../components/SearchContainer/Search'
import List from '../components/QuestionsContainer/List'
import axios from 'axios'

const Questions = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    
    window.scrollTo(0, 0);

    async function getQuestion () {
      await axios
        .get("/api/question")
        .then((res) => {
        // console.log(res.data)
        setQuestions(res.data.reverse())
      })
      .catch((err) => {
        console.log(err)
      });
    }
    getQuestion()
  }, []);
  
    
  return (
    <Layout>
      <Search />
      <List questions = {questions}/>
    </Layout>
  )
}

export default Questions
