var answer = prompt("Please enter your answer");

var count = 1

function guess() {
    var input = document.getElementById("input_number").value;

    

    if (input >= 0 && input <= 100 && input !="") {
        if (input == answer) {
            document.getElementById("result").innerHTML = "Congratulations! The answer is " + answer;
            document.getElementById("count").innerHTML = "You guessed " + count + " times";
            document.getElementById("result").style.color = "blue";
            document.getElementById("count").style.color = "red";
        } else if (input < answer) {
count++;
            document.getElementById("result").innerHTML = "Guess bigger number!";
        } else {
            count++;
            document.getElementById("result").innerHTML = "Guess smaller number!";
        }

    } else {
        alert("Please Enter 0 ~ 100");
    }

    // document.getElementById("result").innerHTML = input;
}
