var Question_1 = {
    question: "what is the main language on web development?",
    answers: {
        one: "C++",
        two: "Swift",
        three: "JavaScript"
    },
    correct_answer: "three"
};


var Question_2 = {
    question: "which one is not a JavaScript framework or library?",
    answers: {
        one: "spring",
        two: "React",
        three: "Angular"
    },
    correct_answer: "one"
};

var Question_3 = {
    question: "which JavaScript framework can deploy on mobile device?",
    answers: {
        one: "React",
        two: "React Native",
        three: "Vue"
    },
    correct_answer: "two"
};


var Questions = [Question_1, Question_2, Question_3];

//var user_answer = prompt(Questions[Math.floor(Math.random() * 3)].question);

function show_question() {
    var user_answer = prompt(Questions[Math.floor(Math.random() * 3)].question);
    var Questions_Object = Questions[Math.floor(Math.random() * 3)].answers;
    var Questions_array = [Questions_Object.one, Questions_Object.two, Questions_Object.three];
    console.log("1." + Questions_array[0]);
    console.log("2." + Questions_array[1]);
    console.log("3." + Questions_array[2]);

}
//show_question();
function correct_or_not() {
    show_question();
    if (user_answer === Questions[Math.floor(Math.random() * 3)].correct_answer) {
        console.log("correct!!!");
        show_question();
    } else {
        console.log("Wrong!!! Please try it again.");

    }
}