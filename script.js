let userScore=0;
let computerScore=0;
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userScore");
const computerScorePara=document.querySelector("#computerScore");

const choices=document.querySelectorAll(".choice");

const drawGame=()=>{
    msg.innerText="*IT WAS A DRAW*";
    msg.style.backgroundColor="blue";
}

const gameChoice= () =>{
    const options=["rock","paper","scissors"];
    const number=Math.floor(Math.random()*3);
    return options[number];
}
const showWinner=(userWin,userChoice,computer)=>{
    if(userWin){
        msg.innerText=`YOU WIN! your ${userChoice} beats ${computer}`;
        msg.style.backgroundColor="yellow";
        userScore++;
        userScorePara.innerText=userScore;
    }else{
        msg.innerText=`YOU LOOSE! ${computer} beats ${userChoice}`;
        msg.style.backgroundColor="green";
        computerScore++;
        computerScorePara.innerText=computerScore    ;
    }
}

const playGame= (userChoice) => {
   
    const computer=gameChoice();
    
    if(userChoice==computer)
    {
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=computer==="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin=computer==="scissors"?false:true;
        }else{
            userWin=computer==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computer);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    });
});
