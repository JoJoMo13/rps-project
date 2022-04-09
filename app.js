let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + " beats " + computerChoice + ". You win!" 
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + userChoice + ". You lose!"
}

function draw(){
    result_p.innerHTML = "It's a draw!"
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissors":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorspaper":
        case "scissorslizard":
        case "lizardspock":
        case "lizardpaper":
        case "spockscissors":
        case "spockrock":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "rockspock":
        case "paperscissors":
        case "paperlizard":
        case "scissorsrock":
        case "scissorsspock":
        case "lizardrock":
        case "lizardscissors":
        case "spocklizard":
        case "spockpaper":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw();
            break;
    }
    
}

function main(){
    rock_div.addEventListener('click', function(){
        game("rock"); 
    })
    
    paper_div.addEventListener('click', function(){
        game("paper");
    })
    
    scissors_div.addEventListener('click', function(){
        game("scissors");
    })
    
    lizard_div.addEventListener('click', function(){
        game("lizard");
    })
    
    spock_div.addEventListener('click', function(){
        game("spock");
    })
}

main();