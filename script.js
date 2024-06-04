let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePera = document.querySelector("#user-score")
const compScorePera = document.querySelector("#comp-score")

  // Generate computer choice

  const getCompChoice = () =>{
    const options = ["rock","paper", "scissors"]
    const randidx = Math.floor(Math.random()*3);
    return options[randidx]
  };

    // Draw game 
  const drawGame = () =>{

    msg.innerText = "ohh! the match is draw";
    msg.style.backgroundColor = "#081b31";
  };

  // show winner

  const showWinner = (userWin , userchoice, compChoice) =>{
    if(userWin){
     userScore++;
     userScorePera.innerText = userScore;
      msg.innerText = `Yeh! you win your ${userchoice} beats ${compChoice}`
      msg.style.backgroundColor = "green"
    } else{
      compScore++;
      compScorePera.innerText = compScore;
      msg.innerText = `Yeh! you lost ${compChoice} beats ${userchoice}`
      msg.style.backgroundColor = "red"
    }
  }

    const playgame = (userchoice) =>{
    // console.log("user choice",userchoice) 
  
    //generate computer choice
    const compChoice = getCompChoice();
    // console.log("computer choice=", compChoice)

    if(userchoice===compChoice){
      drawGame();
    } else{
      let userWin = true;
      if(userchoice ==="rock"){
        // scissor paper
        userWin = compChoice === "paper" ? false : true;
      }else if(userchoice ==="paper"){
        // rock scissors
        userWin = compChoice ==="scissors" ? false : true;
      } else{
        // rock ,paper
        userWin = compChoice === "rock" ? false :true;
      }
      showWinner(userWin, userchoice,compChoice);
    }
}

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userchoice =choice.getAttribute("id")
       
        playgame(userchoice);
    })
});