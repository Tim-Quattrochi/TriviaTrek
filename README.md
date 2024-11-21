# TriviaTrek

## Description

TriviaTrek is a simple trivia quiz web application that fetches questions from the [Open Trivia Database](https://opentdb.com/). The app presents a series of multiple-choice questions, tracks the user's score, and allows the user to restart the quiz.

## Features

Fetches random trivia questions: The app fetches 10 trivia questions via the Open Trivia Database API.
Multiple choice answers: Each question has multiple answer options that the user can select.
Tracks user score: The user's score is updated based on correct answers.
Restart functionality: After finishing the quiz, the user can restart the quiz and try again.
Error handling: Displays messages for network issues or too many API requests.
Demo
[Include a link to your deployed demo here, if available]

## Installation

Clone the repository:

```bash
git clone https://github.com/Tim-Quattrochi/TriviaTrek.git
```

### Navigate to the project directory

```bash
cd TriviaTrek
```

Open the project in VS Code: If you use **Visual Studio Code** , open the project folder in VS Code.

```If you have the Live Server extension installed in VS Code:

Open the index.html file in VS Code.
Click on the Go Live button at the bottom-right of the VS Code window to start the local server.
This will open your app in the default browser.
```

## Usage

### Start the quiz

When the page loads, the quiz will automatically start by fetching questions from the Open Trivia Database API.
Select answers: Click on an answer choice to select it. The app will check whether the answer is correct.
Navigate through questions: After selecting an answer, click the "Next" button to move to the next question.
View score: After answering all questions, your score will be displayed.
Restart the quiz: Click the "Restart" button to reset the quiz and start over.

### Technologies Used

**HTML:** Structure of the page
**CSS:** Basic styling for the quiz interface
**JavaScript:** Main functionality of the app (fetching data, updating UI, score tracking)

## Code Explanation

- `fetchQuestions:` Fetches trivia questions from the Open Trivia Database API and stores them in the quizData array.
  sanitizeText: A helper function that converts HTML entities into regular text (e.g., converts &quot; to ") to avoid breaking the HTML structure.

- `displayQuestion:` Displays the current question and its multiple-choice options.
- `checkAnswer:` Checks whether the selected answer is correct and updates the score.
- `showResults:` Displays the final score after all questions are answered.
- `Event listeners:` Handles user interactions such as selecting answers, moving to the next question, and restarting the quiz.
- `API Used`
  [Open Trivia Database (API)](https://opentdb.com/api_config.php) - Provides trivia questions in various categories and formats.
  Troubleshooting
  If the app displays "Too many requests, please try again later," it means the API has temporarily limited the number of requests. Wait a few minutes and try again.
  If the app displays "Something went wrong, please try again," there may be an issue with fetching the trivia questions. Check your internet connection and try again.

## Contributing

Feel free to fork the repository and submit pull requests with improvements or bug fixes.
