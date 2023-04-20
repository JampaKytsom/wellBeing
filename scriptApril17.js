function finishFunction() {
    alert("Thank you for completing the quiz.");
}

function checkAnswers(); {
    //assign "0" to the "score" variable
    var score = 0;
    //assign the quiz elements to the quiz variable
    quiz = document.forms.QuizDraft.elements;
    //assign the answer to the quation to the answer1 variable
    answer1 = quiz.growth.value;
    //check the answer to the first question
        if(answer1 == "70%") {
            //add 1 to the score if the user score  was correct
            score = score +1;
        }
        answer2 = quiz.talent.value;
        if (answer2 =="50") {
            score = score + 1;
        }





    alert ("Well done, your score was ..." + score);
}