import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions, handleDelete, handleChange }) {

useEffect(() => {
  fetch('http://localhost:4000/questions')
  .then(res => res.json())
  .then(data => setQuestions(data))
  .catch(error => console.error(error))
  
}, [setQuestions])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          questions.map((question) => { 
            return <QuestionItem 
                      key={question.id} 
                      question={question} 
                      handleDelete={handleDelete} 
                      handleChange={handleChange}
                      />})
        }
      </ul>
    </section>
  );
}

export default QuestionList;
