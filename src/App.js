import React, { useState } from "react";
import { FaRegUser, FaQuestionCircle } from "react-icons/fa";

function App() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (name && question) {
      const newQuestion = { id: Date.now(), name, question, answer: "Pending answer" };
      setQuestions([newQuestion, ...questions]);
      setName("");
      setQuestion("");
    }
  };

  return (
    <div style={{ padding: '20px', background: '#f3f4f6', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#047857' }}>PATH Community Health Q&A Portal</h1>
      <div style={{ background: '#fff', padding: '20px', margin: '20px auto', maxWidth: '600px', borderRadius: '8px' }}>
        <h2 style={{ color: '#065f46' }}><FaRegUser /> Ask a Question</h2>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <textarea
          placeholder="Type your health-related question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button onClick={handleSubmit} style={{ background: '#047857', color: '#fff', padding: '10px 20px', border: 'none' }}>Submit</button>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {questions.length > 0 ? (
          questions.map((q) => (
            <div key={q.id} style={{ background: '#fff', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
              <p><strong><FaRegUser /> {q.name} asked:</strong></p>
              <p>{q.question}</p>
              <p style={{ color: '#065f46', fontStyle: 'italic' }}><FaQuestionCircle /> Answer: {q.answer}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#9ca3af' }}>No questions yet. Be the first to ask!</p>
        )}
      </div>
    </div>
  );
}

export default App;
