function myFunction() {
    alert("Thank you for completing the quiz");
  }
/*function finishFunction(); {
    alert("Thank you for completing the quiz.");
}
*/
function checkAnswers() {
   
    //assign "0" to the "score" variable
    var score = 0;
    //assign the quiz elements to the quiz variable
    quiz = document.forms.index.elements;
    //assign the answer to the quation to the answer1 variable
    answer1 = quiz.growth.value;
    //check the answer to the first question       

       if(answer1 == "100%") {
            score = score +1;
} 
    answer2 = quiz.talent.value;
    
         if (answer2 =="100") {
            score = score + 1;
        }
     alert("Well done, your score ..." + score);
}




  
