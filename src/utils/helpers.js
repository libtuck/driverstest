// Function to shuffle array (Fisher-Yates algorithm)
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Function to calculate score
export const calculateScore = (userAnswers, questionSet) => {
  let correctAnswers = 0;
  Object.keys(userAnswers).forEach(questionIndex => {
    if (userAnswers[questionIndex] === questionSet[questionIndex].correctAnswer) {
      correctAnswers++;
    }
  });
  return {
    correct: correctAnswers,
    total: questionSet.length,
    percentage: Math.round((correctAnswers / questionSet.length) * 100),
    passed: correctAnswers >= 32 // 80% passing threshold
  };
};
