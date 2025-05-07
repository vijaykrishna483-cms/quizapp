import React, { useState } from "react";
// import { Button, Card, CardContent } from "@/components/ui/card";

const ExamInstructions = () => {
  const [step, setStep] = useState(0);

  const instructionSets = [
    [
      "Access the exam portal using the link provided and log in with your registered credentials.",
      "Verify your details (name, ID, and exam information) displayed on the dashboard before starting.",
      "Familiarize yourself with navigation buttons like Start Exam, Next, Previous, and Submit.",
      "Perform a system check to ensure your camera, microphone, and internet connection are working correctly.",
      "Click Start Exam to begin. This will activate the timer and unlock your questions.",
      "Use the Next and Previous buttons to navigate between questions. Avoid using your browser's back/forward buttons.",
      "Save your progress periodically using the Save Progress button or rely on auto-save.",
      "Keep track of the timer displayed at the top of the screen and manage your time wisely.",
      "Review your answers carefully before clicking the Submit Exam button.",
      "If you experience technical issues, use the Help or Support option immediately."
    ],
    [
      "Do not use unauthorized devices, such as mobile phones, smartwatches, or additional computers.",
      "Avoid using notes, books, or any other external resources unless explicitly allowed.",
      "Refrain from communicating with others during the exam; the portal may be monitored.",
      "Do not refresh or exit the exam portal until the exam is completed.",
      "Any cheating or rule violation will lead to disqualification and potential disciplinary action."
    ]
  ];

  const handleNext = () => {
    if (step < instructionSets.length - 1) {
      setStep(step + 1);
    } else {
 
      window.location.href = "/exam"; 
    }
  };

  return (
    <div className="flex flex-row items-center justify-center h-[100vh] bg-gray-100">
         <div className=" text-4xl font-black text-white text-center flex flex-col justify-center items-center w-[30vw] h-[100vh] bg-[#35a88f]">
        TENSORS JUNIOR OLYMPIAD <br /> 2025
      </div>
      <div className="w-[70vw] flex flex-col items-center justify-center h-[100vh]">
      <div className="w-full max-w-2xl p-6 ">
        <div>
          <h1 className="text-2xl font-bold mb-4">Exam Instructions</h1>
          <ul className="list-disc pl-5 space-y-2">
            {instructionSets[step].map((instruction, index) => (
              <li key={index} className="text-base text-gray-700">
                {instruction}
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-6">
            <button onClick={handleNext} className="px-4 py-2 bg-[#35a88f] text-white rounded-lg shadow hover:bg-[#35a88feb]">
              {step < instructionSets.length - 1 ? "Next" : "Start Exam"}
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ExamInstructions;
