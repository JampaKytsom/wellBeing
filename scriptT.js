function myFunction() {
    alert("Thank you for completing the quiz");
}

function checkAnswers() {
  var score = 0;
  quiz = document.forms.index.elements;
  
    answer1 = quiz.growth.value;
      if(answer1 == "100%") {
      score = score +1;
 }
    answer2 = quiz.talent.value;
      if (answer2 =="100") {
      score = score + 1;
}
   alert("Well done, your score is..." + score);
}
