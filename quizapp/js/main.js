
Handlebars.registerHelper("eq", function (a, b) {
  return a === b;
});

let studentName = "";
let selectedQuizId = null;
let currentQuestionIndex = 0;
let score = 0;


document.addEventListener("DOMContentLoaded", () => {
  getQuizzes().then((quizzes) => {
    renderTemplate("home", { quizzes });
    setTimeout(() => {
      document.getElementById("startQuiz").addEventListener("click", () => {
        const nameInput = document.getElementById("studentName");
        const quizSelect = document.getElementById("quizSelect");
        studentName = nameInput.value.trim();
        selectedQuizId = quizSelect.value;
        if (!studentName || !selectedQuizId) {
          alert("Please enter your name and select a quiz.");
          return;
        }
        startQuiz();
      });
    }, 300);
  });
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  loadNextQuestion();
}

function loadNextQuestion() {
  getQuestion(selectedQuizId, currentQuestionIndex).then((question) => {
    if (!question) {
      showResult();
      return;
    }
    renderTemplate("quiz", {
      question,
      index: currentQuestionIndex + 1,
      total: 5,
      score,
      elapsed: 0
    });
    setTimeout(() => {
      // For multiple-choice questions
      document.querySelectorAll(".answer-btn").forEach((button) => {
        button.addEventListener("click", () => {
          const selectedAnswer = button.dataset.answer;
          const correctAnswer = question.answer;
          if (selectedAnswer === correctAnswer) {
            score++;
            showCorrectMessage(() => {
              currentQuestionIndex++;
              loadNextQuestion();
            });
          } else {
            showFeedbackView(question.feedback);
          }
        });
      });
      
      const narrativeSubmit = document.getElementById("submitNarrative");
      if (narrativeSubmit) {
        narrativeSubmit.addEventListener("click", () => {
          const userAnswer = document.getElementById("narrativeInput").value.trim();
          const correctAnswer = question.answer;
          if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
            showCorrectMessage(() => {
              currentQuestionIndex++;
              loadNextQuestion();
            });
          } else {
            showFeedbackView(question.feedback);
          }
        });
      }
     
      document.querySelectorAll(".image-btn").forEach((button) => {
        button.addEventListener("click", () => {
          
          const selectedAnswer = button.dataset.answer;
          if (selectedAnswer === "true") {
            score++;
            showCorrectMessage(() => {
              currentQuestionIndex++;
              loadNextQuestion();
            });
          } else {
            showFeedbackView(question.feedback);
          }
        });
      });
    }, 300);
  });
}

function showCorrectMessage(callback) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "correct-msg text-center mt-3";
  messageDiv.innerText = getRandomPraise();
  document.getElementById("app").appendChild(messageDiv);
  setTimeout(() => {
    messageDiv.remove();
    callback();
  }, 1000);
}

function getRandomPraise() {
  const messages = ["Brilliant!", "Awesome!", "Good work!", "Nice job!", "Excellent!"];
  return messages[Math.floor(Math.random() * messages.length)];
}

function showFeedbackView(feedback) {
  renderTemplate("feedback", { feedback });
  setTimeout(() => {
    document.getElementById("gotItBtn").addEventListener("click", () => {
      currentQuestionIndex++;
      loadNextQuestion();
    });
  }, 300);
}

function showResult() {
  const percentage = (score / 5) * 100;
  const passed = percentage >= 80;
  renderTemplate("result", {
    studentName,
    passed,
    score,
    total: 5
  });
  setTimeout(() => {
    document.getElementById("retakeBtn").addEventListener("click", () => {
      startQuiz();
    });
    document.getElementById("homeBtn").addEventListener("click", () => {
      location.reload();
    });
  }, 300);
}

  
