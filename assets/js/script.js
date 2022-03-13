const startBtn = document.querySelector(".start-btn button")
const quizBox = document.querySelector(".quiz-box")
const optionList = document.querySelector(".option-list");

//when start quiz button is clicked
startBtn.onclick = () =>{
        startBtn.classList.remove("activeStart") //hide the start btn
        quizBox.classList.add("activeQuiz") //show the quiz box
        showQuestions(0);
}
var questionCount = 0;

const nextBtn = quizBox.querySelector("footer .next-btn");

//if next button clicked
nextBtn.onClick = () => {
        if (questionCount < questions.length - 1) {
                questionCount++;
                showQuestions(questionCount);
        } else {
                console.log("Questions Completed");
        }
}
//obtaining q's and option answers from the above array
        function showQuestions(index) {
                const questionText = document.querySelector(".question-text");
                const optionList = document.querySelector(".option-list");
                var questionTag = "<span>" +questions[index].numb + ". " + questions[index].question + '</span>';
                var optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                questionText.innerHTML = questionTag;
                optionList.innerHTML = optionTag;
        }