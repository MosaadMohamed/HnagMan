const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let letterscontainer = document.querySelector(".letters");

lettersArray.forEach((letter) =>{

    let span = document.createElement("span");

    let theletter = document.createTextNode(letter);

    span.appendChild(theletter);

    span.className = 'letter-box';

    letterscontainer.appendChild(span);
});

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: [ "Hitchcock", "Alexander", "Cleopatra", "Salah","Elzero"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words);

let RandomPropNumber = Math.floor(Math.random() * allKeys.length);

let randomPropName = allKeys[RandomPropNumber];

let randomPropvalue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropvalue.length);

let randomValueValue = randomPropvalue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;


let lettersGuessContainer = document.querySelector(".letters-guess");

let letterAndSpace = Array.from(randomValueValue);

letterAndSpace.forEach((letter) =>{
    let emptySpan = document.createElement("span");

        emptySpan.className = "with-space";

    lettersGuessContainer.appendChild(emptySpan);
});


let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");


document.addEventListener("click", (e)=>{

    let theStatus = false;

    if(e.target.className === "letter-box")
    {
        e.target.classList.add("clicked");

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        theChosenWord.forEach((wordLetter, WordIndex) =>{

            if(wordLetter === theClickedLetter)
            {
                theStatus = true;

                guessSpans.forEach((span, spanIndex) => {

                    if (WordIndex === spanIndex) {

                    span.innerHTML = theClickedLetter;
                    
                }
                });
            }
        });

        if(theStatus !== true)
        {
            document.getElementById("fail").play();
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);


            if(wrongAttempts === 8)
            {
                endGame();

                letterscontainer.classList.add("finished");

            } 
        } else{
            document.getElementById("success").play();
        }
    }

});

document.querySelector("button").addEventListener("click",()=>{
location.reload();
});

function endGame() {

    let div = document.createElement("div");

    let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

    div.appendChild(divText);

    div.className = 'popup';

    document.body.appendChild(div);

}