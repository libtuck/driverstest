import { getRandomQuestions } from './PracticeQuestions';

const [questions] = useState(() => getRandomQuestions(40));


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
