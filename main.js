const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const nextButton = document.getElementById("nextBtn");
const resultContainer = document.getElementById("resultContainer");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restartBtn");

let currentQuestionIdx = 0;
let score = 0;
let quizData = [];

async function fetchQuestions() {
  try {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&type=multiple"
    );
    if (res.status === 429) {
      questionText.textContent =
        "Too many requests, please try again later.";
      nextButton.classList.add("hidden");
      return;
    }
    const data = await res.json();

    quizData = data.results;
    displayQuestion();
  } catch (error) {
    console.log(error);
    questionText.textContent =
      "Something went wrong, please try again.";
  }
}

/**
 * @param {string} text
 * @description helper func to format html entities, e.g., &quot;Star Trek: Voyager&quot to "Star Trek: Voyager".
 * @returns string
 */
function sanitizeText(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIdx];
  questionText.textContent = sanitizeText(currentQuestion.question);

  answerOptions.innerHTML = "";

  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];
  answers.sort(() => Math.random() - 0.5);

  answers.forEach((answer) => {
    const li = document.createElement("li");
    li.textContent = sanitizeText(answer);
    li.addEventListener("click", () => {
      const allAnswers = answerOptions.querySelectorAll("li");
      allAnswers.forEach((item) => item.classList.remove("selected"));

      li.classList.add("selected");

      checkAnswer(answer, currentQuestion.correct_answer);
    });

    answerOptions.appendChild(li);
  });
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score++;
  }
  nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
  currentQuestionIdx++;
  if (currentQuestionIdx < quizData.length) {
    displayQuestion();
  } else {
    showResults();
  }
  nextButton.disabled = true;
});

function showResults() {
  resultContainer.style.display = "block";
  scoreDisplay.textContent = score;
  nextButton.style.display = "none";
}

restartButton.addEventListener("click", () => {
  score = 0;
  currentQuestionIdx = 0;
  resultContainer.style.display = "none";
  nextButton.style.display = "inline-block";
  fetchQuestions();
});

fetchQuestions();
