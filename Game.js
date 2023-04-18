let randomNumber = Math.floor(Math.random()*100)
console.log(randomNumber)
let inputVal = document.getElementById("guessid")
let count = 100;
let guess = document.getElementById("sc");
let score = document.getElementById("score")
let highscore = document.getElementById("highscore");
let number=document.getElementById("num")
function maincheck(){
    if(randomNumber>inputVal.value){
        console.log("Your guess is Low")
        guess.innerHTML="Your guess is Low";
        count--;
        score.textContent=count;
    }
    else if(randomNumber<inputVal.value){
        console.log("Your guess is High")
        guess.innerText="Your guess is High"
        count--;
        score.textContent=count;
    }
    else{
        console.log("🤩🤩 Hurray You Won 🤩🤩")
        guess.innerText="🤩🤩 Hurray You Won 🤩🤩";
        document.body.style.backgroundColor="green";
        score.textContent=count;
        highscore.textContent=count;
        number.textContent=randomNumber;
        inputVal.style.display="none";
    }
}
function reloadgame(){
    window.location.reload("Refresh")
}