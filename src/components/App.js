import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([])

  function handleDelete(id) {
    const updatedQuestions = questions.filter(question => question.id !== id)
    setQuestions(updatedQuestions);
  }

  function handleChange(id, correctIndex) {
    const updatedState = questions.map((question) => {
      if (question.id === id) {
        return { ...question, correctIndex}
      } else {
        return question
      }
    })

    setQuestions(updatedState)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm questions={questions} setQuestions={setQuestions} /> : 
        <QuestionList questions={questions} setQuestions={setQuestions} handleDelete={handleDelete} handleChange={handleChange} />
      }
    </main>
  );
}

export default App;
