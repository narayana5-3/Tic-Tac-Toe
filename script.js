let boxes=document.querySelectorAll(".game_button");
let reset=document.querySelector("#resset");

let turnx = true;

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
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turnx){
            box.innerText="x";
            turnx=false;
        }else{
            box.innerText="o";
            turnx=true; 
        }
        box.disabled=true;
    })
})