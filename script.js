const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let score = 0;

const questions = [
  {
    question: "Which is the largets animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  {
    question: "Which is the smallest continent in the world",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Antartica", correct: false },
      { text: "Africa", correct: false },
    ],
  },

  {
    question: "Which is the largest desert in the world",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Sonoram", correct: false },
      { text: "Antartica Desert", correct: true },
      { text: "Gobi", correct: false },
    ],
  },

  {
    question: "Which is the smallest country in the world",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: true },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
];

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function showQuestions() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if(ans.correct){
        button.dataset.correct = ans.correct;
    }
   // button.dataset.correct = ans.correct; //code to make all wrong answers red
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }

    button.disabled = true;
  });

  //==== code to make all wrong answers red ====
  //selectedBtn.classList.add("selected")
  // Array.from(answerBtns.children).forEach(button => {
  //     console.log("button ",button)
  //     if(button.dataset.correct === "true"){
  //         button.classList.add("correct")
  //         return;
  //     }
  //     button.classList.add("incorrect")
  //     button.disabled = true;
  // });

  nextBtn.style.display = "block";
}

function startquiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestions();
}

startquiz();
