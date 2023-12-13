const quizData = [
    {
      question: "What is the value of π (pi) to two decimal places?",
      a: "3.14",
      b: "2.71",
      c: "4.20",
      d: "1.62",
      correct: "a",
    },
    {
      question: "If a triangle has angles of 30°, 60°, and 90°, what type of triangle is it?",
      a: "Equilateral",
      b: "Isosceles",
      c: "Scalene",
      d: "Right-angled",
      correct: "d",
    },
    {
      question: "What is the value of the square root of 121?",
      a: "10",
      b: "11",
      c: "12",
      d: "13",
      correct: "b",
    },
    {
      question: "In an arithmetic progression, if a = 3 and d = 4, what is the seventh term?",
      a: "21",
      b: "24",
      c: "27",
      d: "30",
      correct: "c",
    },
    {
      question: "What is the result of 2^5 (2 raised to the power of 5)?",
      a: "16",
      b: "32",
      c: "64",
      d: "128",
      correct: "c",
    },
    {
      question: "If log₂(x) = 3, what is the value of x?",
      a: "8",
      b: "9",
      c: "6",
      d: "27",
      correct: "a",
    },
    {
      question: "What is the area of a rectangle with length 8 units and width 5 units?",
      a: "13 square units",
      b: "35 square units",
      c: "40 square units",
      d: "45 square units",
      correct: "c",
    },
    {
      question: "If sin(45°) = cos(45°), what is the value of tan(45°)?",
      a: "0",
      b: "1",
      c: "√2",
      d: "2",
      correct: "b",
    },
    {
      question: "What is the factorial of 6 (6!)?",
      a: "120",
      b: "240",
      c: "720",
      d: "360",
      correct: "c",
    },
    {
      question: "In a right-angled triangle, if the legs are 5 units and 12 units, what is the length of the hypotenuse?",
      a: "10",
      b: "13",
      c: "15",
      d: "17",
      correct: "b",
    },
    {
        question: "What is the perimeter of a square with sides of length 8 units?",
        a: "16 units",
        b: "32 units",
        c: "40 units",
        d: "64 units",
        correct: "b",
      },
      {
        question: "Calculate the area of a circle with a radius of 5 units. (Use π ≈ 3.14)",
        a: "15.7 square units",
        b: "25 square units",
        c: "31.4 square units",
        d: "78.5 square units",
        correct: "c",
      },
      {
        question: "Solve for x: 2x + 5 = 13.",
        a: "4",
        b: "6",
        c: "8",
        d: "9",
        correct: "a",
      },
      {
        question: "What is the sum of the angles in a triangle?",
        a: "90 degrees",
        b: "180 degrees",
        c: "270 degrees",
        d: "360 degrees",
        correct: "b",
      },
      {
        question: "If log₃(9) = x, what is the value of x?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c",
      },
      {
        question: "Find the value of sin(60 degrees).",
        a: "0.5",
        b: "0.707",
        c: "1",
        d: "√3/2",
        correct: "d",
      },
      {
        question: "Calculate the factorial of 7 (7!).",
        a: "5040",
        b: "720",
        c: "120",
        d: "42",
        correct: "a",
      },
      {
        question: "What is the next term in the arithmetic sequence: 5, 9, 13, 17, ...?",
        a: "21",
        b: "22",
        c: "25",
        d: "29",
        correct: "a",
      },
      {
        question: "Determine the square root of 144.",
        a: "10",
        b: "12",
        c: "14",
        d: "16",
        correct: "b",
      },
      {
        question: "In a right-angled triangle, if one angle is 45 degrees, what is the measure of the other acute angle?",
        a: "45 degrees",
        b: "30 degrees",
        c: "60 degrees",
        d: "90 degrees",
        correct: "a",
      },
      
      
  ];
  const shuffledQuestions = shuffleArray(quizData);
  let index = 0;
  let correct = 0,
    incorrect = 0,
    total = shuffledQuestions.length;
  
  const questionBox = document.getElementById("questionBox");
  const allInputs = document.querySelectorAll("input[type='radio']");
  const feedbackElement = document.getElementById("feedback");
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const loadQuestion = () => {
    if (index >= total || index >= 5) {
        return quizEnd();
    }
    reset();
    const data = shuffledQuestions[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
};
document.querySelector("#submit").addEventListener("click", function () {
    const data = shuffledQuestions[index];
    const selectedOption = getAnswer();
    if (selectedOption === data.correct) {
        correct++;
        showFeedback("Correct! Well done.", true);
    } else {
        incorrect++;
        showFeedback(`Incorrect. The correct answer is (${data.correct.toUpperCase()}).`, false);
    }
    index++;
    loadQuestion();
});
const getAnswer = () => {
    let ans;
    allInputs.forEach((inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    });
    return ans;
};
const reset = () => {
    allInputs.forEach((inputEl) => {
        inputEl.checked = false;
    });
};
const quizEnd = () => {
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / 5 </h3>
           <br> <button onclick="retakeQuiz()">Retake Quiz</button>
        </div>
    `;
};
const showFeedback = (message, isCorrect) => {
    feedbackElement.innerHTML = message;
    feedbackElement.style.color = isCorrect ? "green" : "red";

    setTimeout(() => {
        feedbackElement.innerHTML = "";
    }, 3000);
};
const retakeQuiz = () => {
    location.reload(); 
};

loadQuestion(index);