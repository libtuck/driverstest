import { useState } from "react";

const questions = [
  {
    question: "How far must you park from a fire hydrant in Washington State?",
    options: ["5 feet", "10 feet", "15 feet", "20 feet"],
    answer: 2,
    explanation: "You must park at least 15 feet away from a fire hydrant to allow access in case of emergency."
  },
  {
    question: "What does this sign indicate? (Yellow diamond with a curved arrow and a speed limit of 35 mph)",
    options: ["Speed limit ahead", "Sharp turn ahead, maximum safe speed 35 mph", "Winding road next 35 miles", "Minimum speed 35 mph"],
    answer: 1,
    explanation: "This sign warns of a sharp turn ahead. 35 mph is the maximum safe speed for the curve."
  },
  {
    question: "When should you use your headlights?",
    options: ["Only at night", "From sunset to sunrise", "When visibility is less than 1,000 feet", "Both B and C"],
    answer: 3,
    explanation: "You must use headlights from sunset to sunrise and when visibility is less than 1,000 feet."
  },
  {
    question: "You are approaching a school bus with its stop sign extended. What should you do?",
    options: ["Slow down and pass carefully", "Stop only if children are crossing", "Stop regardless of your direction of travel", "Honk before passing"],
    answer: 2,
    explanation: "You must stop in both directions when a school bus has its stop sign extended and red lights flashing."
  },
  {
    question: "What does a flashing yellow light mean?",
    options: ["Stop immediately", "Proceed with caution", "Speed up to clear the intersection", "Turn only if safe"],
    answer: 1,
    explanation: "A flashing yellow light means slow down and proceed with caution."
  },
  {
    question: "Minimum safe following distance under normal conditions is:",
    options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
    answer: 2,
    explanation: "The recommended minimum following distance is 3 seconds under normal conditions."
  },
  {
    question: "How far must you park from a pedestrian crosswalk at an intersection?",
    options: ["5 feet", "15 feet", "20 feet", "25 feet"],
    answer: 2,
    explanation: "You must not park within 20 feet of a pedestrian crosswalk at an intersection."
  },
  {
    question: "If your vehicle starts to hydroplane, what should you do?",
    options: ["Brake hard immediately", "Swerve quickly to the side", "Ease off the gas and steer straight", "Accelerate to regain traction"],
    answer: 2,
    explanation: "Ease off the accelerator and keep the steering wheel straight until you regain control."
  },
  {
    question: "What does a white rectangular sign usually indicate?",
    options: ["Warning", "Regulatory", "School zone", "Construction"],
    answer: 1,
    explanation: "White rectangular signs are regulatory signs, such as speed limits or lane usage."
  },
  {
    question: "When is it legal to turn right at a red light in Washington?",
    options: ["Only when a sign permits it", "After a full stop and if the way is clear", "Only during daylight hours", "Never"],
    answer: 1,
    explanation: "You may turn right on red after stopping, unless posted otherwise."
  }
];

export default function PracticeTest() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[current].answer) setScore(score + 1);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setComplete(true);
    }
  };

  if (complete) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Test Complete</h2>
        <p>Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-2">Question {current + 1} of {questions.length}</h2>
      <p className="mb-4">{q.question}</p>
      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className={`block w-full text-left px-4 py-2 border rounded-md ${selected !== null ? (i === q.answer ? 'bg-green-100 border-green-400' : i === selected ? 'bg-red-100 border-red-400' : 'bg-gray-100') : 'hover:bg-gray-50'}`}
            disabled={selected !== null}
          >
            {opt}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-4 bg-blue-50 border border-blue-300 p-3 rounded">
          <p className="mb-2"><strong>Explanation:</strong> {q.explanation}</p>
          <button
            onClick={nextQuestion}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Got it — Next Question
          </button>
        </div>
      )}
    </div>
  );
}
