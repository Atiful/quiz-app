const questions = [
    {
      question: "What is the capital of France?",
      answer: [
        { text: "Paris", correct: "true" },
        { text: "London", correct: "false" },
        { text: "Berlin", correct: "false" },
        { text: "Rome", correct: "false" },
      ],
    },
    {
      question: "What is the tallest mountain in the world?",
      answer: [
        { text: "Mount Everest", correct: "true" },
        { text: "K2", correct: "false" },
        { text: "Kangchenjunga", correct: "false" },
        { text: "Lhotse", correct: "false" },
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      answer: [
        { text: "Pacific Ocean", correct: "true" },
        { text: "Atlantic Ocean", correct: "false" },
        { text: "Indian Ocean", correct: "false" },
        { text: "Arctic Ocean", correct: "false" },
      ],
    },
    {
      question: "What is the process of turning liquid water into solid ice called?",
      answer: [
        { text: "Freezing", correct: "true" },
        { text: "Boiling", correct: "false" },
        { text: "Evaporation", correct: "false" },
        { text: "Condensation", correct: "false" },
      ],
    },
    {
      question: "What is the process of turning a gas into a liquid called?",
      answer: [
        { text: "Condensation", correct: "true" },
        { text: "Evaporation", correct: "false" },
        { text: "Freezing", correct: "false" },
        { text: "Melting", correct: "false" },
      ],
    },
  ];
  

const start = document.querySelector(".start");
const body = document.querySelector(".question");
const next = document.querySelector(".next");
const quest = document.querySelector("p");
const answer = document.querySelector(".answer");


start.addEventListener("click" , function(event){
   body.style.display = "block";
   next.style.display = "block";
   start.style.display = "none";
   startQuiz();
});

let currentIndex = 0;
let score = 0;



// start Quiz
function startQuiz(){
    currentIndex = 0;
    score = 0;
    showQuestion();
}



function showQuestion(){
    let question = questions[currentIndex].question;
    let questionno = currentIndex + 1;
    let p = document.createElement("p");
    p.innerHTML = questionno+ ". " +question;
    answer.insertAdjacentElement("beforebegin" , p);

    let ans = "";

    questions[currentIndex].answer.forEach((el) => {
           const button = document.createElement("button");
           button.classList.add("btn");
           button.innerText = el.text;
           answer.appendChild(button);
           if(el.correct == "true"){
            ans = el.text;
           }
    });

    // on click checking answer
    let button = document.querySelectorAll(".btn");
    let valueClick = "";
    button.forEach((el) => {
        el.addEventListener("click" , (e)=>{
            valueClick = e.target.innerText;
            if(ans === e.target.innerText){
                e.target.classList.add("correct");
                score++;
            }
            else{
               e.target.classList.add("incorrect");
            }

            button.forEach((el) => {
                if(ans == el.innerHTML){
                    el.classList.add("correct");
                }
                else{
                    el.classList.add("incorrect");
                }
            });

        });
    });
}

// showing score
function showscore(){
    reset();
 let p = document.createElement("p");
 p.innerText = "your score : " +score+ "/5";
 p.classList.add("score");
 let h1 = document.querySelector("h1");
 h1.append(p);
}

// reset all
function reset(){
    let p = document.querySelector("p");
    p.remove();
    let btn = document.querySelectorAll(".answer .btn");
    btn.forEach((el) => {
        el.remove();
    });
}

// handle next button for next question
function handlenextbutton(){
    currentIndex++;
    if(currentIndex < questions.length){
        reset();
        showQuestion();
    }
    else{
        showscore();
    }
}

// reset score
function resetscore(){
    let p = document.querySelector(".score");
    if(p != null){
        p.remove();
    }
}

// when next button is triggered
next.addEventListener("click", function(el){
    resetscore();
    if(currentIndex < questions.length){
       handlenextbutton();
    }
    else{
        startQuiz();
    }
});

// when enter is pressed then also next button is triggered
document.addEventListener("keypress" , (event) => {
    if(event.keyCode == "13"){
        resetscore();
    if(currentIndex < questions.length){
       handlenextbutton();
    }
    else{
        startQuiz();
    }
    }
});

