// js/api.js

const mockData = {
  quizzes: [
    { id: 1, title: "JavaScript Fundamentals" },
    { id: 2, title: "Python Basics" }
  ],
  questions: {
    1: [
      {
        id: 101,
        type: "multiple-choice",
        text: "Which of the following is a valid JavaScript data type?",
        options: ["Number", "Car", "Tree", "House"],
        answer: "Number",
        feedback: "Number is a valid JavaScript data type."
      },
      {
        id: 102,
        type: "narrative",
        text: "What keyword is used to declare a constant variable?",
        answer: "const",
        feedback: "Use 'const' to declare a constant variable."
      },
      {
        id: 103,
        type: "multiple-choice",
        text: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape",
        feedback: "JavaScript was developed by Netscape."
      },
      {
        id: 104,
        type: "multiple-choice",
        text: "Which operator checks for strict equality (value and type)?",
        options: ["==", "===", "=", "!=="],
        answer: "===",
        feedback: "The strict equality operator is ===."
      },
      {
        id: 105,
        type: "image",
        text: "Select the JavaScript logo from the options below.",
        images: [
          { url: "./images/js-logo.png", correct: true },
          { url: "./images/python-logo.png", correct: false },
          { url: "./images/java-logo.png", correct: false }
        ],
        feedback: "The JavaScript logo is the one with the recognizable 'JS' symbol."
      }
    ],
    2: [
      {
        id: 201,
        type: "multiple-choice",
        text: "What keyword is used to define a function in Python?",
        options: ["func", "def", "function", "lambda"],
        answer: "def",
        feedback: "'def' is the correct keyword to define a function in Python."
      },
      {
        id: 202,
        type: "narrative",
        text: "What is the result of print(2 + 3) in Python?",
        answer: "5",
        feedback: "2 + 3 equals 5."
      },
      {
        id: 203,
        type: "multiple-choice",
        text: "Which built-in data type in Python stores key-value pairs?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        answer: "Dictionary",
        feedback: "Dictionary is used to store key-value pairs in Python."
      },
      {
        id: 204,
        type: "narrative",
        text: "What symbol is used to denote a comment in Python?",
        answer: "#",
        feedback: "The '#' symbol is used for comments in Python."
      },
      {
        id: 205,
        type: "multiple-choice",
        text: "Which method is used to add an element to the end of a Python list?",
        options: ["append()", "add()", "push()", "insert()"],
        answer: "append()",
        feedback: "append() is the method used to add an element to a Python list."
      }
    ]
  }
};

function getQuizzes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.quizzes);
    }, 300);
  });
}

function getQuestion(quizId, questionIndex) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const questions = mockData.questions[quizId] || [];
      resolve(questions[questionIndex] || null);
    }, 300);
  });
}
  
