const questions = [
    {
        question : "Which is the largets animal in the world",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },

    {
        question : "Which is the smallest continent in the world",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Antartica",correct:false},
            {text:"Africa",correct:false},
        ]  
    }
]

function showQuestions(){
    
}


const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let score = 0;

function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestions()
}
