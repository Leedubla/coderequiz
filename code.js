var myQuestions = [
    {
      question: "What is 10/2?",
      answers: {
        a: '3',
        b: '5',
        c: '115'
      },
      correctAnswer: 'b'
    },
    {
        question: "What is Java Script:",
        answers: {
            a:'Text based coding language', 
            b:'App for my phone', 
            c:'reciepe book for coding', 
            d:'off shoot of css'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is not one of the JavaScript Data Types?",
        answers: {
            a:'strings',
            b:'numbers',
            c:'booleans', 
            d:'alerts'},
        correctAnswer: 'd'
    },
    {
        question: "What is negative infinity?",
        answers: {
            a:'The opposite of positive infinity',
            b:'all positive numbers', 
            c:'all negative numbers', 
            d:'only decimals'
        },
        correctAnswer: "The opposite of positive infinity"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            a:'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parenthesis'},
        correctAnswer: 'c'
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        answers: {
            a:'Javascript', 
            b:'terminal / bash', 
            c:'for loops',
            d:'console log'
        },
        correctAnswer: 'd'
    },

];
 
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }
 
  var timeleft = 30;
  function redirect(){
    document.location.href = 'www.google.com'
  }
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 30 - timeleft;
  timeleft -= 1;
}, 1000);