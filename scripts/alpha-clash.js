// function play() {
//     //hide the homescreen
//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add("hidden");

//     //show the playground
//     const playGround = document.getElementById("play-ground")
//     playGround.classList.remove("hidden");
// }

function handleKeyboardKeyupEvent(event) {
    const playerPressed = event.key;


    //get expected to press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //check right or wrong key pressed
    // and life and score update
    if (playerPressed === expectedAlphabet) {
        console.log("you got a point !");

        const currentScore = getTextElementValueById("current-score");
        const updatedScore = currentScore + 1
        setTextElementValueById("current-score", updatedScore);




        // -----------------------------------------------
        //     // update score:
        //     // 1. get the current score
        //     const currentScoreElement = document.getElementById("current-score");
        //     const currentScoreText = currentScoreElement.innerText
        //     const currentScore = parseInt(currentScoreText);

        //     // increase the score by 1
        // const newScore = currentScore + 1;
        //     //show the updated score
        //     currentScoreElement.innerText = newScore;

        //     removeBackgroundColorById(expectedAlphabet)
        //     continueGame()
        }
        // else{
        //     // show the current life
        //     const currentLifeElement = document.getElementById("current-life");
        //     const currentLifeText = currentLifeElement.innerText;
        //     const currentLife = parseInt(currentLifeText);
        //     // reduce the life count
        //     const newLife =currentLife - 1;
        //     // show updatetd life
        //     currentLifeElement.innerText = newLife
        //     console.log("press the right key");
        // }
    }
    document.addEventListener("keyup", handleKeyboardKeyupEvent);


    function continueGame() {
        //step-1.generate a random alphabet
        const alphabet = getARandomAlphabet();
        console.log("your random alphabet :", alphabet);

        //set randomly generated alphabet to the screen (show it)
        const currentAlphabet = document.getElementById("current-alphabet");
        currentAlphabet.innerText = alphabet;

        //set backgroungcolor
        setBackgroundColorById(alphabet);
    }


    function play() {
        hideElementByid("home-screen");
        showElementByid("play-ground");
        continueGame()
    }