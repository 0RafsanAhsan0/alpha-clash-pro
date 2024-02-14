function hideElementByid(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}


function showElementByid(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function getARandomAlphabet(){
    //get or create an alphabet array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = alphabetString.split("");
    // console.log(alphabets);

    //get a random index between 0 - 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}