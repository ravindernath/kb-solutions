import React from 'react'
import Layout from '../components/Layout'
import Search from '../components/SearchContainer/Search'
import List from '../components/QuestionsContainer/List'

const APage = () => {
  return (
    <Layout>
      <Search />
      <List />
    </Layout>
  )
}

export default APage
