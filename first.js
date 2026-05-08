
let box =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetBtn");
let newgamebtn=document.querySelector("#new-game");
let message=document.querySelector("#message");
let msgcontainer=document.querySelector(".msg-container");

let turn0 = true;
let CountMoves=0;

const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetgame = () => {
  turn0=true;
  CountMoves=0;
  enableboxes();
  msgcontainer.classList.add("hide");
  }

box.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turn0){
      box.innerText="0";
      box.classList.add("zero");
      box.classList.remove("cross");
      turn0=false;
    }
    else{
      box.innerText="X";
      box.classList.add("cross");
      box.classList.remove("zero");
      turn0=true;
    }
    box.disabled=true;
    CountMoves++;

    checkwin();
  });
});

const disableboxes = () => {
  for(let any of box){
    any.disabled=true;
  }
}

const enableboxes = () => {
  for(let any of box){
    any.disabled=false;
    any.innerText="";
    any.classList.remove("cross","zero");
  }
}

const showwinner = (winner) => {
  message.innerText = `Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
}

const showDraw = () => {
  message.innerText = "It's a Draw!";
  msgcontainer.classList.remove("hide");
  disableboxes();
};


const checkwin = () => {
  for( let pattern of winPatterns){
      let pos1 =box[pattern[0]].innerText;
      let pos2 =box[pattern[1]].innerText;
      let pos3 =box[pattern[2]].innerText;

      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
          showwinner(pos1);
          return;
        }
      }
  }
  if(CountMoves==9){
    showDraw();
  }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

