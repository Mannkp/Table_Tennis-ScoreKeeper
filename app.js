const resetBtn = document.querySelector("#reset");
const selectWinningScore = document.querySelector("#select");

let winningScore = parseInt(selectWinningScore.value);
let isGameOver = false;
let isDisabled = false;

const p1 = {
    score: 0,
    button: document.querySelector("#p1"),
    display: document.querySelector("#p1Span")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2"),
    display: document.querySelector("#p2Span")
}

selectWinningScore.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
    // alert(winningScore);
});

resetBtn.addEventListener('click', reset);

function updateScores(player, opponent){
    if(!isGameOver){
        if(player.score === (winningScore-1) && opponent.score === (winningScore-1)){
            winningScore += 1;
        }
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('green');
            opponent.display.classList.add('red');
            player.button.disabled = true;
            opponent.button.disabled = true;
            isDisabled = true;
            if(isDisabled){
                // p1.style.backgroundColor = "grey";
                // p2.style.backgroundColor = "grey";
                player.button.classList.add("grey");
                opponent.button.classList.add("grey");
            }   
        }
    player.display.innerText = player.score;

    }
}

function reset(){
    for (let p of [p1, p2]) {
        p.score = 0;
        isGameOver = false;
        p.display.innerText = p.score;
        p.display.classList.remove("red" , "green");
        p.button.disabled = false;
        isDisabled = false;
        p.button.classList.remove("grey");
    }
}

p1.button.addEventListener('click', function(){
    updateScores(p1,p2);    
});
p2.button.addEventListener('click', function(){
    updateScores(p2,p1);    
});

// p1.addEventListener('click', function(){
//         if(!isGameOver){
//             player1_score += 1;
//         }
//         if(player1_score === winningScore){
//             isGameOver = true;
//             console.log("player 1 wins!");
//             p1Score.classList.add('green');
//             p2Score.classList.add('red');
//             p1.disabled = true;
//             p2.disabled = true;
//             isDisabled = true;
//             if(isDisabled){
//                 // p1.style.backgroundColor = "grey";
//                 // p2.style.backgroundColor = "grey";
//                 p1.classList.add("grey");
//                 p2.classList.add("grey");
//             }   
//         }
//     p1Score.innerText = player1_score;
// });


// p2.addEventListener('click', function(){
//         if(!isGameOver){
//             player2_score += 1;
//         }
//         if(player2_score === winningScore){
//             isGameOver = true;
//             console.log("player 2 wins!");
//             p1Score.classList.add('red');
//             p2Score.classList.add('green');
//             p1.disabled = true;
//             p2.disabled = true;
//             isDisabled = true;
//             if(isDisabled){
//                 p1.classList.add("grey");
//                 p2.classList.add("grey");
//             }
//         }
//     p2Score.innerText = player2_score;
// });