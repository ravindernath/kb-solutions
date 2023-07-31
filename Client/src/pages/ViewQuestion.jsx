import React, { useEffect } from "react";
import Layout from "../components/Layout";
import MainQuestion from "../components/QuestionsContainer/ViewQuestion/MainQuestion";

const ViewQuestion = () => {
  
   // Reset the scroll position to top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <MainQuestion />
    </Layout>
  );
};

export default ViewQuestion;
