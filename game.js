//////////////////////////////Coding challenge////////////////////////////////////

/*

--------- let's build a fun quiz game in the console!--------

1. Build a function constructor called question to describe a question. A question should include:
a) Question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array,object,etc.)
c) correct answer( I would use a number  for this)


2.create a couple of questions using the constructor

3.Store them all inside an array

4.Select one random question and log it on the console,together with the possible answers (each question should have a number)
(hint: write a method for the Question Objects for this task.)

5. Use the 'prompt' function to ask the user for the correct answer.the user should input the number of correct answer such as you
displayed it on task 4.

6.check if the answer is correct and print to the console whether the answer is correct or nor (Hint: write another method for this).

7.suppose this code would be a plugin for other programmers to use in their code.so make sure that all your code is private and doesn't
interfere with the other programmers code. (Hint: we learned a special technique to do exactly that).



----------- Expert level--------------

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call
    it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends.so include the option to quit the game if the user writes 'exit' instead 
answer. In case ,Don't call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct , add 1 point  to 
the score (Hint: I'm going to use the power of closures for this,but you don't have to,Just do this with the tools you feel more comfortable
at this point).

11. Display the score in the console.Use yet another method for this.

*/



(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc=callback(true);
        } else {
            console.log('Wrong answer , Try again!!!');
            sc = callback(false);
        }
        this.displayscore(sc);
    }
    Question.prototype.displayscore = function (score) {
        console.log('Your Current score is: ' + score);
        console.log('--------------------------');
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world? ', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('what does best describe coding?', ['Boring', 'Hard', 'fun', 'tediuos'], 2);
    
    var questions = [q1, q2, q3];


    function score() {
        var sc = 0;
        return function (correct) {
            if (correct)
            {
                sc++;   
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer),keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();






