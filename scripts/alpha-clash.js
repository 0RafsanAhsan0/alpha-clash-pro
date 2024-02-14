// function play() {
//     //hide the homescreen
//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add("hidden");

//     //show the playground
//     const playGround = document.getElementById("play-ground")
//     playGround.classList.remove("hidden");
// }
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