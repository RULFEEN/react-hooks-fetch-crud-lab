import React from "react";

function QuestionItem({ question, handleDelete, handleChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function deleteQuestion(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .catch(error => console.error(error))

    handleDelete(id)
  }

  function changeIndex(e) {
    const newIndex = parseInt(e.target.value)

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ correctIndex: newIndex })
    })
    .then(res => res.json())
    .then(data => handleChange(data.id, data.correctIndex))
    .catch(error => console.error(error))

    console.log(id);
    console.log(newIndex);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={changeIndex} >{options}</select>
      </label>
      <button onClick={() => deleteQuestion(id)} id={id} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
