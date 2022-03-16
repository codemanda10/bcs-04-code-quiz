const startBtn = document.querySelector(".start-btn button");
const quizBox = document.querySelector(".quiz-box");
const timeCount = quizBox.querySelector(".timer-seconds");

const optionList = document.querySelector(".option-list");

var initialsInput = document.querySelector("#initials-input");
var scoreInput = document.querySelector("#score-input");
var saveBtn = document.querySelector("#save");
var submitForm = document.querySelector("submit-form");

//when start quiz button is clicked
startBtn.onclick = () =>{
        startBtn.classList.remove("activeStart") //hide the start btn

        quizBox.classList.add("activeQuiz") //show the quiz box
        showQuestions(0);
        questionCounter(1);
        startTimer(60);
}
var questionCount = 0;
var questionNumb = 1;
var counter;
var timeValue = 60;

const nextBtn = document.querySelector(".next-btn");
const resultBox = document.querySelector(".result-box");

//if next button clicked
nextBtn.onclick = ()=>{
        if (questionCount < questions.length - 1) {
                questionCount++;
                questionNumb++;
                showQuestions(questionCount);
                questionCounter(questionNumb);
                startTimer(timeValue);
                clearInterval(counter);
        }else{
                console.log("Questions Completed");
                showResultBox();
        }
}
//obtaining q's and option answers from the above array
        function showQuestions(index) {
                const questionText = document.querySelector(".question-text");
                var questionTag = "<span>" +questions[index].numb + ". " + questions[index].question + '</span>';
                var optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                questionText.innerHTML = questionTag;
                optionList.innerHTML = optionTag;
                const option = optionList.querySelectorAll(".option");
                for (i = 0; i < option.length; i++) {
                        option[i].setAttribute("onclick", "optionSelected(this)");
                }
}


function optionSelected(answer) {
        clearInterval(counter);
        startTimer(timeValue);
        var userAns = answer.textContent;
        var correctAns = questions[questionCount].answer;
        var allOptions = optionList.children.length;
        if (userAns == correctAns) {
                answer.classList.add("correct");
                console.log("Answer is correct");
        } else {
                answer.classList.add("incorrect");
                console.log("Answer is Wrong");
        }
                //if incorrect then automatically select correct answer
                for (i = 0; i < allOptions; i++) {
                        if (optionList.children[i].textContent == correctAns) {
                                optionList.children[i].setAttribute("class", "option correct");
                        }
                
        }

        //once user selected, disabled all options
        for (let i = 0; i < allOptions; i++) {
                optionList.children[i].classList.add("disabled");
        }

}

function showResultBox() {

        quizBox.classList.remove("activeQuiz");
        resultBox.classList.remove("hide");
        resultBox.classList.add("activeResult"); //show result box
        
}

function startTimer(time) {
        counter = setInterval(timer, 1000);
        function timer() {
                timeCount.textContent = time;
                time--;
        }
}
        
function questionCounter(index) {
        const lowerQuestionCounter = quizBox.querySelector(".total-questions");
        var totalQuestionCountTag = '<span><p>' + questionCount + '</p>Of<p>' + questions.length + '</p>Questions</span>';
        lowerQuestionCounter.innerHTML = totalQuestionCountTag;
}


//if signup button clicked
saveBtn.onclick = (() => {
})


const user = JSON.parse(localStorage.getItem("user")) || [];
console.log(user);

  // create user object from submission
  const userScore = {
          initials: initialsInput,
        score: scoreInput
};
console.log(user)
submitForm.addEventListener("submit", () => {
        saveBtn.disabled = !initialsInput.value;
    })


// set new submission to local storage 
localStorage.setItem("initialsInput", JSON.stringify(user));
localStorage.setItem("scoreInput", JSON.stringify(user));
  