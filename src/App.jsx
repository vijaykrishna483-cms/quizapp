import { useState } from 'react'

import './App.css'
import Exam from './Components/Exam'
import Login from './Components/Login'
import Instru from './Components/Instruction'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {


  return (
    // <>
    //  <Exam/>
    //  <Login/>
    // </>

    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/instru" element={<Instru />} />

      
    </Routes>
  </Router>
  )
}

export default App




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
  
//   return (
//     <div>
//       <h1>Quiz</h1>
//       {questions.map((item, index) => (
//         <div key={index}>
//           <h3>{item.question}</h3>
//           {item.options.map((option, idx) => (
//             <div key={idx}>
//               <input type="radio" id={`option-${index}-${idx}`} name={`question-${index}`} value={option} />
//               <label htmlFor={`option-${index}-${idx}`}>{option}</label>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
