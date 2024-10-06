let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let co=document.querySelector("#text");
let usersc=document.querySelector("#usc");
let compsc=document.querySelector("#csc");
let displaytxt=document.querySelector("#txt");

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
let gencompchoice=(()=>{
    let options=["rock","paper","scissor"];
    let randomidx=Math.floor(Math.random()*3);
     return options[randomidx];
});

let playgame=((userchoice)=>{
    console.log("user choice",userchoice);
     const compchoice=gencompchoice();
     console.log("comp choice",compchoice);
    if(userchoice===compchoice){
          draw();
    }
    else{
        let userwin=true;
        if(userchoice==="stone"){
            let userwin=compchoice==="paper"?false:true;
            Displaywinner(userwin,userchoice,compchoice);
        }
        else if(userchoice==="paper"){
            let userwin=compchoice==="scissor"?false:true;
            Displaywinner(userwin,userchoice,compchoice);
        }
        else{
            let userwin=compchoice==="stone"?false:true;
            Displaywinner(userwin,userchoice,compchoice);
                }
} 
});

let draw=()=>{
    console.log("Game was Drawn!");
    displaytxt.innerText="Game was Drawn!"
    co.style.backgroundcolor="blue";
}

let Displaywinner=(userwin,userchoice,compchoice)=>{
    if(userwin===true){
        console.log("you Won!");
        userscore++;
        usersc.innerText=userscore;
        displaytxt.innerText=`You Won! Your ${userchoice} beats ${compchoice}`;
        co.style.backgroundcolor="green";
    }

   else{
        console.log("comp won!");
        compscore++;
        compsc.innerText=compscore;
        displaytxt.innerText=`Comp Won! ${compchoice} beats your ${userchoice}`;
        co.style.backgroundcolor="red";

  }
}