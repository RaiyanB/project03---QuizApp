// js/api.js

// Simulated quiz data (you can replace/add more later)
const mockData = {
    quizzes: [
      { id: 1, title: "JavaScript Basics" },
      { id: 2, title: "Python Fundamentals" }
    ],
    questions: {
      1: [
        {
          id: 101,
          type: "multiple-choice",
          text: "Which is a JavaScript data type?",
          options: ["Car", "Boolean", "Tree", "House"],
          answer: "Boolean",
          feedback: "Boolean is a data type that represents true or false."
        }
      ],
      2: [
        {
          id: 201,
          type: "narrative",
          text: "What keyword is used to define a function in Python?",
          answer: "def",
          feedback: "`def` is used to define a function in Python."
        }
      ]
    }
  };
  
  // Returns a list of quizzes
  function getQuizzes() {
    return Promise.resolve(mockData.quizzes);
  }
  
  // Returns one question at a time based on quiz and index
  function getQuestion(quizId, questionIndex) {
    const quizQuestions = mockData.questions[quizId] || [];
    return Promise.resolve(quizQuestions[questionIndex] || null);
  }

  