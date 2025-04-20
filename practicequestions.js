const questionBank = [
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
  // Add more questions here to build your full rotating bank
];

export function getRandomQuestions(count = 40) {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
