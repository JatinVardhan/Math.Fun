
  let index = 0;
  let correct = 0,
    incorrect = 0,
    total = shuffledQuestions.length;
  
  const questionBox = document.getElementById("questionBox");
  const allInputs = document.querySelectorAll("input[type='radio']");