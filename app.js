// A SIMPLE CONSOLE QUIZ PROGRAM...
/*
    * Concepts Used include:
    * IIFE
    * Function Constructors
    * Prototype Chaining 
    * Arrow Functions
    * Callback
*/

(function() {
      function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
      }

    Question.prototype.displayQuestion = function() {
      console.log(this.question);
      for (let i = 0; i < this.answers.length; i++) {
        console.log(i+': '+this.answers[i]);
      }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
      let uScore;
      if(ans===this.correctAnswer){
        console.log('Correct Answer...');
        uScore = callback(true);
      } else {
        prompt('Incorrect Answer! Try Again...');
        uScore = callback(false);
      }
      this.displayScore(uScore);
    }

    Question.prototype.displayScore = function(score){
      console.log("Your curent score is: " + score);
      console.log("-------------------------------------------");
    }

    let q1 = new Question('Is JS the coolest progrmming language?',['yes','no'],0);
    let q2 = new Question('Is JS user friendly?',['yes','no'],0);
    let q3 = new Question('Are you a repair man?',['yes','no'],1);
    let questions = [q1, q2, q3];

    const score = () => {
      let userScore = 0;
      return function(correct){
        if(correct){
          userScore++;
        }
        return userScore;
      }
    }

    let finalScore = score();

    const nextQuestion = () => {
      let n = Math.floor(Math.random()*questions.length);
      questions[n].displayQuestion();
      let userAnswer =prompt('Please enter answer');
      if(userAnswer!=='exit'){
        questions[n].checkAnswer(parseInt(userAnswer), finalScore);
        nextQuestion();
      }
    };

    nextQuestion();   
})();
