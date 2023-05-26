const score = document.querySelector("#score");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const resetBtn = document.querySelector("#reset");
const selectWinningScore = document.querySelector("#select");
const p1Score = document.querySelector("#p1Span");
const p2Score = document.querySelector("#p2Span");

let player1_score = 0;
let player2_score = 0;
let winningScore = 0;
let isGameOver = false;
let isDisabled = false;

selectWinningScore.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
    // alert(winningScore);
});

resetBtn.addEventListener('click', reset);

function reset(){
    player1_score = 0;
    player2_score = 0;
    isGameOver = false;
    p1Score.innerText = player1_score;
    p2Score.innerText = player2_score;
    p1Score.classList.remove("red" , "green");
    p2Score.classList.remove("red" , "green");
    p1.disabled = false;
    p2.disabled = false;
    isDisabled = false;
    p1.classList.remove("grey");
    p2.classList.remove("grey");
}

p1.addEventListener('click', function(){
    if (player1_score !== winningScore){
        if(!isGameOver){
            player1_score += 1;
        }
        if(player1_score === winningScore){
            isGameOver = true;
            console.log("player 1 wins!");
            p1Score.classList.add('green');
            p2Score.classList.add('red');
            p1.disabled = true;
            p2.disabled = true;
            isDisabled = true;
            if(isDisabled){
                // p1.style.backgroundColor = "grey";
                // p2.style.backgroundColor = "grey";
                p1.classList.add("grey");
                p2.classList.add("grey");
            }   
        }
    p1Score.innerText = player1_score;
}
});


p2.addEventListener('click', function(){
    if(player2_score !== winningScore){
        if(!isGameOver){
            player2_score += 1;
        }
        if(player2_score === winningScore){
            isGameOver = true;
            console.log("player 2 wins!");
            p1Score.classList.add('red');
            p2Score.classList.add('green');
            p1.disabled = true;
            p2.disabled = true;
            isDisabled = true;
            if(isDisabled){
                // p1.style.backgroundColor = "grey";
                // p2.style.backgroundColor = "grey";
                p1.classList.add("grey");
                p2.classList.add("grey");
            }
        }
    p2Score.innerText = player2_score;
    }
});

    // if(isGameOver){
    //     p1.disabled = true;
    //     p2.disabled = true;
    // }