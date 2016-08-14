var answer = prompt("Please enter your answer");
// answer = Big(answer);
var count = 1

function guess() {
    var input = document.getElementById("input_number").value;
    // input = Big(input);
    console.log("answer:" + answer);
    console.log("input:" + input);

    if (input >= 0 && input < 101 && input != "") {
        if (input == answer) {
            document.getElementById("result").innerHTML = "Congratulations! The answer is " + answer;
            document.getElementById("count").innerHTML = "You guessed " + count + " times";
            document.getElementById("result").style.color = "blue";
            document.getElementById("count").style.color = "red";
        }

        console.log("answer1:" + answer);
        console.log("input1:" + input);
        if (input < answer) {
            count++;
            document.getElementById("result").innerHTML = "Guess bigger number!";
        }

        console.log("answer2:" + answer);
        console.log("input2:" + input);
        if (input > answer) {
            count++;
            document.getElementById("result").innerHTML = "Guess smaller number!";
        }

    } else {
        alert("Please Enter 0 ~ 100");
    }

    // document.getElementById("result").innerHTML = input;
}
