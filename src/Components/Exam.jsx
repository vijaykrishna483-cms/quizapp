import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exam = () => {
  const [selectedOption, setSelectedOption] = useState({}); // Store answers for each question
  const [index, setIndex] = useState(0); // Current question index
  const [questions, setQuestions] = useState([]); // Store fetched questions
  const [result, setResult] = useState(false); // Flag to show result
  const [indexselected, setIndexselected] = useState('1'); // Track selected question
  const [quizAnswers, setQuizAnswers] = useState([]); // To store all selected answers

  // Fetch questions and options from Google Sheets
  useEffect(() => {
    const sheetId = '1K7B81cwcoyhVJv55c4vx4CjfIWo_bZumCmB1RY8iwgI'; // Your Google Sheet ID for questions
    const apiKey = 'AIzaSyB9ei-N1529-UNS_VG08Eglk26nN3q2uHs'; // Replace with your API key
    const range = 'Sheet1!A2:D'; // Assuming questions are in A2:D in the sheet

    const fetchData = async () => {
      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
        const response = await axios.get(url);
        const rows = response.data.values;

        // Process the rows into a more usable format
        const quizData = rows.map((row) => ({
          question: row[0],
          options: [row[1], row[2], row[3]],
        }));

        setQuestions(quizData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Move to next question
  const next = () => {
    if (index === questions.length - 1) {
      setResult(true);
      return;
    }
    setIndex(prev => prev + 1);
  };

  // Move to previous question
  const prev = () => {
    if (index === 0) return;
    setIndex(prev => prev - 1);
  };

  // Handle the selection of an answer
  const selectOption = (selected) => {
    setSelectedOption((prev) => ({
      ...prev,
      [index]: selected, // Save the selected option for the current question
    }));
  };











  const submitQuiz = async () => {

    const sheetsId = '1mNFRH1OP7HUbWyfrS3A9JTogAZ1en5mEiQ_LR2GvAH8'; // Your Google Sheet ID for questions
    const apiiKey = 'AIzaSyDZutf26XpIgaMCqaL241DzQKeQaDfrXyc'; // Replace with your API key
    const range = 'Sheet1!A2:D'; // Assuming questions are in A2:D in the sheet


    const answers = questions.map((item, idx) => ({
      question: item.question,
      selectedOption: selectedOption[idx] || 'No answer selected',
    }));
  
    const requestBody = {
      values: answers.map(answer => [answer.question, answer.selectedOption]),
    };
  
    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS&key=${apiiKey}`;
      const response = await axios.post(url, requestBody);
  
      if (response.status === 200) {
        console.log('Answers submitted successfully!');
        setResult(true);
      } else {
        console.error('Error submitting answers:', response.data);
        alert(`Error: ${response.data.error.message}`);
      }
    } catch (error) {
      console.error('Error submitting answers:', error);
      
      if (error.response) {
        alert(`Error ${error.response.status}: ${error.response.data.error.message}`);
      } else {
        alert('There was an error submitting your answers. Please try again later.');
      }
    }
  };
  
  

  return (
    <div className="flex flex-row justify-center w-[100vw] h-[100vh]">
      <div className="text-4xl font-black text-white text-center flex flex-col justify-center items-center w-[30vw] h-[100vh] bg-[#35a88f]">
        TENSORS JUNIOR OLYMPIAD <br /> 2025
        <p className="font-bold mt-[2vh] text-3xl text-[#ffc400]">PHYSICS</p>
        <div className="flex flex-wrap gap-[10px] justify-center w-[80%] mt-[5vh]">
          {questions.map((item, idx) => (
            <div key={idx} className="flex">
              <span
                style={{
                  backgroundColor: indexselected === idx ? 'yellow' : '#35a88f',
                  color: indexselected === idx ? 'grey' : 'white',
                  cursor: 'pointer',
                }}
                onClick={() => setIndex(idx)} // Update index on click
                className={`border-2 border-white-200 px-[8px] py-[3px] font-extralight w-[4vw] h-[4vw] rounded-full`}
              >
                {idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[70vw] h-[100vh] flex flex-col justify-center items-center">
        {/* Displaying only the current question */}
        <div key={index}>
          <h3>{questions[index]?.question}</h3>
          {questions[index]?.options && questions[index].options.map((option, idx) => (
            <div key={idx}>
              <input
                type="radio"
                id={`option-${index}-${idx}`}
                name={`question-${index}`}
                value={option}
                checked={selectedOption[index] === option} // Preselect the option if it's already selected
                onChange={() => selectOption(option)} // Update the selected option
              />
              <label htmlFor={`option-${index}-${idx}`}>{option}</label>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-[2vw] font-lighter">
          <button
            onClick={prev}
            className="px-[2vw] py-[1vh] mt-[4vh] text-white text-2xl rounded-2xl bg-[#007f6c]"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="px-[2vw] py-[1vh] mt-[4vh] text-white text-2xl rounded-2xl bg-[#ffc400]"
          >
            Next
          </button>
          <button
            onClick={submitQuiz}
            className="px-[2vw] py-[1vh] mt-[4vh] text-white text-2xl rounded-2xl bg-[#007f6c]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exam;
