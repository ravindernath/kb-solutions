import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Search from '../components/SearchContainer/Search'
import List from '../components/QuestionsContainer/List'
import List1 from '../components/QuestionsContainer/List1'
import axios from 'axios'

const Questions = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion () {
      await axios
        .get("/api/question")
        .then((res) => {
        console.log(res.data)
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
      {/* <List1 question = { questions }/> */}
      <List question = { questions }/>
    </Layout>
  )
}

export default Questions
