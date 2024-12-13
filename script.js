document.addEventListener("DOMContentLoaded", function() {
    var bool = [true, true, true, true, true, true, true, true];
    var button = "";
    var correct = new Audio("./assets/sounds/correct_answer.mp3");
    var wrong = new Audio("./assets/sounds/wrong_answer.mp3");
    let answersRoundOne = [ "Python", "C++", "Java", "C", "C#", "JavaScript"];     
    let answersRoundTwo = ["Facebook", "YouTube", "WhatsApp", "Instagram", "TikTok", "Messenger"];
    let answersRoundThree = ["China", "India ", "United States", "Indonesia", "Pakistan","Nigeria"];
    let answersRoundFour =["United Arab Emirates","Qatar","South Korea","Norway","Denmark","Kuwait"]

    if (document.getElementById("round") != null) {
        switch (document.getElementById("round").value) {
            case "2":
                answersRoundOne = answersRoundTwo;
                break;
            case "3":
                answersRoundOne = answersRoundThree;
                break;
            case "4":
                answersRoundOne = answersRoundFour;
                break;

        }
    }
    function first_answer(answer, buttonNumber) {
        button = "myButton" + buttonNumber;
        if (bool[buttonNumber - 1]) {
            document.getElementById(button).classList.toggle("test");
            document.getElementById('back'+buttonNumber).innerHTML = answer;
            correct.currentTime = 0;
            correct.play();
            bool[buttonNumber - 1] = false;
        }
    }

    document.addEventListener("keydown", function(event) {
        const key = event.key;

        if (key >= "1" && key <= "8") {
            first_answer(answersRoundOne[key - 1], key);
        }

        if (key === "x") {
            wrong.currentTime = 0;
            wrong.play();
            showWrongAnswerImage();
        }
    });

    function showWrongAnswerImage() {
        const imageContainer = document.getElementById("wrong-answer-image-container");
        imageContainer.style.display = "block";

       setTimeout(function() {
            imageContainer.style.display = "none";
        }, 1000); 
    }
});
