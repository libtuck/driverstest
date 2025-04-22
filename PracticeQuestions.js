const questionBank = [
  {
    question: "How far must you park from a fire hydrant in Washington State?",
    options: ["5 feet", "10 feet", "15 feet", "20 feet"],
    answer: 2,
    explanation: "You must park at least 15 feet away from a fire hydrant to allow emergency access."
  },
  {
    question: "When approaching a flashing red traffic signal, you must:",
    options: ["Slow down and proceed with caution", "Stop completely, then proceed when safe", "Yield to vehicles on the right", "Continue without stopping"],
    answer: 1,
    explanation: "A flashing red light is treated like a stop sign — you must come to a complete stop."
  },
  {
    question: "What is the minimum following distance you should maintain in normal conditions?",
    options: ["2 seconds", "3 seconds", "4 seconds", "5 seconds"],
    answer: 1,
    explanation: "A 3-second following distance allows for safe reaction time in normal driving conditions."
  },
  {
    question: "It is illegal to pass another vehicle:",
    options: ["In a school zone", "When approaching a hill or curve with no clear visibility", "When traffic is moving slowly", "On a multi-lane highway"],
    answer: 1,
    explanation: "Passing on hills, curves, or anywhere visibility is limited is dangerous and illegal."
  },
  {
    question: "When turning left at an intersection, you must yield to:",
    options: ["Vehicles turning right", "Oncoming traffic and pedestrians", "Vehicles behind you", "Bicycles on the right"],
    answer: 1,
    explanation: "Always yield to oncoming vehicles and any pedestrians crossing."
  }
];

export function getRandomQuestions(count = 40) {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
