function myFunction() {
    alert("Thank you for completing the quiz");
}

function checkAnswers() {
  var score = 0;
  quiz = document.forms.index.elements;
  
    answer1 = quiz.people.value;
      if (answer1 == "100%") {
      score = score +1;
}
    answer2 = quiz.clearMind.value;
      if (answer2 == "75") {
      score = score + 1;
}
    answer3 = quiz.kindness.value;
    if (answer3 =="90%") {
    score = score + 1;
}
    answer4 = quiz.goodhearts.value;
        if (answer4 =="100") {
        score = score + 1;
}
   alert("Well done, your score is..." + score);
}
