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
        text: "Which of the following best describes a closure in JavaScript?",
        options: [
          "A function that remembers its lexical scope",
          "A function that is called immediately after declaration",
          "A function that doesn't require parameters",
          "A function that returns a promise"
        ],
        answer: "A function that remembers its lexical scope",
        feedback: "A closure is a function that retains access to its lexical scope, even when executed outside that scope."
      },
      {
        id: 105,
        type: "image",
        text: "Select the JavaScript logo from the options below.",
        images: [
          { url: "quizapp/images:/js-logo.png", correct: true },
          { url: "quizapp/images:/python-logo.png", correct: false },
          { url: "quizapp/images:/java-logo.png", correct: false }
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
        type: "multiple-choice",
        text: "Which of the following best describes a Python generator?",
        options: [
          "A function that returns a list",
          "A function that computes values and returns an iterator using the 'yield' keyword",
          "A function that creates a dictionary",
          "None of the above"
        ],
        answer: "A function that computes values and returns an iterator using the 'yield' keyword",
        feedback: "Generators use the 'yield' keyword to return an iterator, which is more memory efficient than returning a list."
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


