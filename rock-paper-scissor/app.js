let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const restart=()=>{
        userScore=0
        compScore=0
        userScorePara.innerText=userScore+"/5"
        compScorePara.innerText=compScore+"/5"


}
const endgame=(userScore,compScore)=>{
    if (userScore===5){
        msg.innerText="Final Win : User Won "
        restart();


    }
    if(compScore===5){
        msg.innerText="Final Win : Comp Won "
        restart();
    }
    

}

const drawGame=()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };

  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
    endgame(userScore,compScore);
  };
  
  const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };
  
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });