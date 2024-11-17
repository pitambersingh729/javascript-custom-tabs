const questions = [
  {
    topic: "science",
    question: "What color is the sky?",
    possibleAnswers: ["blue", "green", "yellow", "orange"],
    correctAnswer: "blue",
  },
  {
    topic: "politics",
    question: "Who won the 2024 US presidential election?",
    possibleAnswers: ["trump", "biden", "harris", "obama"],
    correctAnswer: "trump",
  },
  {
    topic: "tech",
    question: "What is the best language to learn?",
    possibleAnswers: ["javascript", "python", "ruby", "react.js"],
    correctAnswer: "javascript",
  },
  {
    topic: "math",
    question: "What is 4 + 4",
    possibleAnswers: ["7", "8", "9", "10"],
    correctAnswer: "8",
  },
  {
    topic: "random",
    question: "What is your favorite energy drink?",
    possibleAnswers: ["ghost", "monster", "redbull", "prime"],
    correctAnswer: "ghost",
  },
];
let results = document.querySelector('.results');
let resultsIn = document.querySelector('.resultsIn');
let resultsInData = document.querySelector('.resultsInData');

let questionContainer = document.getElementById('questionContainer');
console.log(questionContainer)
let indexvalue = 0;

let totalQuestions = questions.length;
console.log(totalQuestions)
let rightAnswers = [];
let wrongAnswers = [];
let submit = document.querySelector('.submit');

let answered = [];

for(let i = 0; i < questions.length; i++){
  let quizRow = document.createElement('div');
  quizRow.className = 'quizRow';
  let topic = document.createElement('small');
  let heading = document.createElement('h3');
  let answeroptions = document.createElement('div');
  answeroptions.className = 'answeroptions';
  indexvalue++;

  questionContainer.appendChild(quizRow);
  quizRow.appendChild(topic);
  quizRow.appendChild(heading);
  quizRow.appendChild(answeroptions);

  topic.innerText = questions[i].topic;
  heading.innerText = indexvalue + ". " + questions[i].question;

  for(let j = 0; j < questions[i].possibleAnswers.length; j++){
    let button = document.createElement('button');
    let answers = questions[i].possibleAnswers[j];
    button.innerText += answers;
    answeroptions.appendChild(button);

    button.addEventListener('click', function(){
      let allButtons = answeroptions.querySelectorAll('button');
      for (let k = 0; k < allButtons.length; k++) {
        allButtons[k].classList.add('disabled');
      }

      if(questions[i].possibleAnswers[j] === questions[i].correctAnswer){
        button.classList.add('correct');
        button.classList.remove('disabled');
        let pushedvalue = questions[i].correctAnswer;
        rightAnswers.push(pushedvalue)
        answered.push(pushedvalue)
        //alert("Right Value Pushed: " + pushedvalue)
        //console.log(rightAnswers)
      }
      else{
        button.classList.add('incorrect')
        let pushedvalue = questions[i].possibleAnswers[j];
        wrongAnswers.push(pushedvalue)
        answered.push(pushedvalue)
        //alert("Wrong Value Pushed: " + pushedvalue)
        //console.log(wrongAnswers)
      }
      if(answered.length === totalQuestions){
        submit.classList.remove('disabled');
      }
    })  
  }
}

submit.addEventListener('click', function(){
  let average = (rightAnswers.length / totalQuestions) * 100;

  let resultHeading = document.createElement('h3');
  let resultScore = document.createElement('p');
  resultsInData.appendChild(resultHeading);
  resultsInData.appendChild(resultScore);
  results.classList.add('show');

  resultHeading.innerText = "Quiz Completed You Scored";
  resultScore.innerHTML = `${average}% out of ${totalQuestions} Questions`;
  //alert(`Total Average: ${average}`)
})