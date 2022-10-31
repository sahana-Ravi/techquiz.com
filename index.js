const quizData=[
  {
  question:" A queue follows _________:",
  a:"LIFO principle",
  b:"FIFO principle",
  c:"Linear tree",
  d:"Ordered array",
  correct:"b",
},

{
question:"The time complexity used for inserting a node in a priority queue on the basis of key is:",
a:"O(n)",
b:"O(n2)",
c:" O(nlogn)",
d:" O(logn)",
correct:"a",
},

{
question:"Which one of the following is an application of Stack Data Structure?",
a:"Managing function calls",
b:"The stock span problem",
c:"Arithmetic expression evaluation",
d:"All of the above",
correct:"d",
} ,

{
question:"Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
a:"Insert Sort",
b:"Heap Sort",
c:"Quick Sort",
d:"Merge Sort",
correct:"d",
} ,

{
question:"In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is",
a:"log 2 n",
b:"n/2",
c:"log 2 n – 1",
d:"n",
correct:"d"
} ,

{
question:"What is the worst case possible height of AVL tree?",
a:"2Log Assume base of log is 2",
b:" 1.44log Assume base of log is 2",
c:"Depends upon implementation",
d:"Theta(n)",
correct:"b",
},

{
question:"How is the 3rd element in an array accessed based on pointer notation?",
a:"*a+3",
b:"*(a+3)",
c:"*(*a+3)",
d:"&(a+3)",
correct:"b",
} ,

{
question:"We cannot use the keyword ‘break’ simply within _________.",
a:"while",
b:"for",
c:"if-else",
d:"do-while",
correct:"c",
},

{
question:"The global variables are ____________.",
a:"external",
b:"internal",
c:"both",
d:"none",
correct:"a"
},

{
question:"A constructor have _____________.",
a:"retrurn type",
b:"no return type",
c:"some return type",
d:"none",
correct:"b",
},

{
question:"The memory that is allocated for any objects is ____________.",
a:"RAM",
b:"Cache",
c:"ROM",
d:"HDD",
correct:"a"
},

{
question:"Which tag do we use to create drop-down?",
a:"<list>",
b:"<option>",
c:"<dropdown>",
d:" <select>",
correct:"d",
},

{
question:"Which HTML tag do we use to display text along with a scrolling effect?",
a:"<div>",
b:"<scroll>",
c:"<marquee>",
d:"None",
correct:"c"
},

{
question:" Which of the following is not a type of network topology?",
a:"ring",
b:"star",
c:"bus",
d:"all",
correct:"d",
},

{
question:"Full form of OSI?",
a:"Open System Interconnect",
b:"Open System Interconnect",
c:"Open System Internet",
d:"Open Source Interconnect",
correct:"a"
},

];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

// function deslectAnswers(){
//   for(i=0;i<answerElements.length;i++)
//   {
//     answerElements[i].checked=false;
//   }
// }
// function getSelected(){
//   let answer;
//   for(i=0;i<answerElements.length;i++)
//   {
//     if(answerElements[i].checked){
//       answer=answerElements[i].id;
//     }
//   }
//   retrun answer;
// }
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};


function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
loadQuiz();
submitButton.addEventListener("click", function () {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {


      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>



            <button onclick="history.go(0)">Play Again</button>
`
         // location.reload() won't work in CodePen for security reasons;





       // location.reload() won't work in CodePen for security reasons;

  }
  }
});
