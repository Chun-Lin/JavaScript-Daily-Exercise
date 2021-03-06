(function () {

    /////Make Objects/////
    function Questions(question, answers, correct_answer) {
        this.question = question;
        this.answers = answers;
        this.correct_answer = correct_answer;
    }

    Questions.prototype.display_question = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };



    Questions.prototype.correct_or_not = function (user_ans, callback) {
            var score;
            if (this.correct_answer === parseInt(user_ans)) {
                console.log("Correct!!");
                score = callback(true);
                console.log("score:" + score);
                console.log("-----------------");
            } else {
                console.log("Wrong!!");
                score = callback(false);
                console.log("score:" + score);
                console.log("-----------------");
            }

        }
        ///////////////////////



    var Question_1 = new Questions("what is the main language on web development?", ["C++", "Swift", "JavaScript"],
        2);
    //new一個新的object，並利用Questions函數將元素加上Question_1的Object中



    var Question_2 = new Questions("which one is not a JavaScript framework or library?", ["Spring", "React", "Angular"],
        0);


    var Question_3 = new Questions("which JavaScript framework can deploy on mobile device?", ["React", "React Native", "Vue"],
        1);


    var Questions_array = [Question_1, Question_2, Question_3];

    function score() {
        var sc = 0;

        return function (correct) {
            //console.log(correct);
            if (correct) {
                sc++;
            }
            return sc;
        }

    }
    var get_score = score();



    function nextQuestion() {
        var n = Math.floor(Math.random() * Questions_array.length);


        Questions_array[n].display_question();

        var user_answer = prompt("your answer is?");
        Questions_array[n].correct_or_not(user_answer, get_score);

        if (user_answer !== "exit") {
            nextQuestion();
        }

    }

    nextQuestion();

})();