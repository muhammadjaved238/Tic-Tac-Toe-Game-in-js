let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#rest-btn");
let NewGamebtn = document.querySelector(".new-gamebtn");
let Message = document.querySelector("#messageP");
let MessageContainer = document.querySelector(".messageContainer");
let count=0;
let trun0 = true; //plhal kon sa plyer ke turn hia;
const WiningPattern = [
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8]
];
 
// This function are rest the game throught the rest button

const restGame=()=>{
     trun0 = true;
     enabledboxes();
     MessageContainer.classList.remove("hide")
}
// This function are work on each box of game
boxes.forEach((box) => {
     box.addEventListener("click", () => {
          console.log("button has click now")
          // box.innerText="javed"
          if (trun0 === true) {
               box.innerText = "0";
               trun0 = false;
          }
          else {
               box.innerText = "x";
               trun0 = true;
          }
          box.disabled = true;
          let iswinner= checkwinnger();
        
      if(count===9&& !iswinner){
          showdraw();
      }
     });

});
// This function will diabled the all boxes after the winning
const disabledboxes=()=>{
     for(box of boxes){
     box.disabled=true;
     }
}
const enabledboxes=()=>{
     for(box of boxes){
     box.disabled=false;
     box.innerText="";
     
     }
}
// This funcatio show the winner on the screeen
const showWinner = (winner) => {
     Message.innerText=`Congrulation winner is  ${winner}`
     MessageContainer.classList.remove("hide");
     disabledboxes();
}
// This function are work every box of game have same value 
const checkwinnger = () => {
     for (pattern of WiningPattern) {
          // console.log( pattern[0],pattern[1],pattern[2])
          // console.log( ,boxes[pattern[1]].innerText, boxes[pattern[2]]);
          let pos1val = boxes[pattern[0]].innerText;
          let pos2val = boxes[pattern[1]].innerText;
          let pos3val = boxes[pattern[2]].innerText;
          if (pos1val != "" && pos2val != "" && pos3val != "") {
               if (pos1val === pos2val && pos2val === pos3val) {
                    console.log("winner", pos1val);
                     showWinner(pos1val);
                     return;
                     

               }

          }
     }
             
}

NewGamebtn.addEventListener("click",restGame);
restbtn.addEventListener("click",restGame);