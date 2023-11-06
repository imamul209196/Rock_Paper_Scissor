
let win=0;
let draw = 0;
let lose =0;


document.getElementById("rock").onclick = function(){
  let randomNumber = Math.random();
  console.log(randomNumber);
  if(randomNumber >=0 && randomNumber < 1/3){
    console.log("Draw!");
    document.getElementById("output").innerHTML="Draw!";
    document.getElementById("draw").value = ++draw;
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    console.log("You Lose!");
    document.getElementById("output").innerHTML="You Lose!";
    document.getElementById("lose").value = ++lose;
  }
  else{
    console.log("You win!");
    document.getElementById("output").innerHTML="You Win!";
    document.getElementById("win").value = ++win;
  }
} 

document.getElementById("paper").onclick = function(){
  let randomNumber = Math.random();
  console.log(randomNumber);
  if(randomNumber >=0 && randomNumber < 1/3){
    console.log("You win!");
    document.getElementById("output").innerHTML="You Win!";
    document.getElementById("win").value = ++win;
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    console.log("Draw!");
    document.getElementById("output").innerHTML="Draw!";
    document.getElementById("draw").value = ++draw;
  }
  else{
    console.log("You Lose!");
    document.getElementById("output").innerHTML="You Lose!";
    document.getElementById("lose").value = ++lose;
  }
} 

document.getElementById("scissor").onclick = function(){
  let randomNumber = Math.random();
  console.log(randomNumber);
  if(randomNumber >=0 && randomNumber < 1/3){
    console.log("You Lose!");
    document.getElementById("output").innerHTML="You Lose!";
    document.getElementById("lose").value = ++lose;
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    console.log("You Win!");
    document.getElementById("output").innerHTML="You Win!";
    document.getElementById("win").value = ++win;
  }
  else{
    console.log("Draw!");
    document.getElementById("output").innerHTML="Draw!";
    document.getElementById("draw").value = ++draw;
  }
} 

document.getElementById("button").onclick = function(){
  win=0;
  draw=0;
  lose=0;
  document.getElementById("draw").value=0;
  document.getElementById("win").value=0;
  document.getElementById("lose").value=0;
  document.getElementById("output").innerHTML="";
}