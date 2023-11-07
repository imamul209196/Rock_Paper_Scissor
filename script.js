
let win=0;
let draw = 0;
let lose =0;


document.getElementById("rock").onclick = function(){
  let rock = document.getElementById("hello1");
  rock.innerHTML = `<div class="rock" id="rock">
  <i class="fa-solid fa-hand-back-fist"></i>
  </div>`
  let randomNumber = Math.random();
  console.log(randomNumber);
  if(randomNumber >=0 && randomNumber < 1/3){
    console.log("Draw!");
    document.getElementById("output").innerHTML="Draw!";
    document.getElementById("draw").value = ++draw;
    let rock = document.getElementById("hello2");
    rock.innerHTML = `<div class="rock" id="rock">
    <i class="fa-solid fa-hand-back-fist"></i>
  </div>`
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    console.log("You Lose!");
    document.getElementById("output").innerHTML="You Lose!";
    document.getElementById("lose").value = ++lose;
    let rock = document.getElementById("hello2");
    rock.innerHTML = `<div class="rock2" id="paper">
    <i class="fa-solid fa-hand"></i>
  </div>`
  }
  else{
    console.log("You win!");
    document.getElementById("output").innerHTML="You Win!";
    document.getElementById("win").value = ++win;
    let rock = document.getElementById("hello2");
    rock.innerHTML = `<div class="rock3" id="scissor">
    <i class="fa-solid fa-hand-scissors"></i>
    </div>`
  }
} 

document.getElementById("paper").onclick = function(){
  let randomNumber = Math.random();
  let rock = document.getElementById("hello1");
    rock.innerHTML = `<div class="rock2" id="paper">
    <i class="fa-solid fa-hand"></i>
    </div>`
  console.log(randomNumber);
  if(randomNumber >=0 && randomNumber < 1/3){
    console.log("You win!");
    document.getElementById("output").innerHTML="You Win!";
    document.getElementById("win").value = ++win;
    let rock = document.getElementById("hello2");
    rock.innerHTML = `<div class="rock" id="rock">
    <i class="fa-solid fa-hand-back-fist"></i>
    </div>`
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    console.log("Draw!");
    document.getElementById("output").innerHTML="Draw!";
    document.getElementById("draw").value = ++draw;
    let rock = document.getElementById("hello2");
    rock.innerHTML = `<div class="rock2" id="paper">
    <i class="fa-solid fa-hand"></i>
    </div>`
  }
  else{
    console.log("You Lose!");
    document.getElementById("output").innerHTML="You Lose!";
    document.getElementById("lose").value = ++lose;
    let rock = document.getElementById("hello2");
    rock.innerHTML = `<div class="rock3" id="scissor">
    <i class="fa-solid fa-hand-scissors"></i>
    </div>`
  }
} 

document.getElementById("scissor").onclick = function(){
  let randomNumber = Math.random();
  let rock = document.getElementById("hello1");
    rock.innerHTML = `<div class="rock3" id="scissor">
    <i class="fa-solid fa-hand-scissors"></i>
    </div>`
  console.log(randomNumber);
  if(randomNumber >=0 && randomNumber < 1/3){
    console.log("You Lose!");
    document.getElementById("output").innerHTML="You Lose!";
    document.getElementById("lose").value = ++lose;
    let rock = document.getElementById("hello2");
    rock.innerHTML = `<div class="rock" id="rock">
    <i class="fa-solid fa-hand-back-fist"></i>
    </div>`
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    console.log("You Win!");
    document.getElementById("output").innerHTML="You Win!";
    document.getElementById("win").value = ++win;
    let rock = document.getElementById("hello2");
    rock.innerHTML = `<div class="rock2" id="paper">
    <i class="fa-solid fa-hand"></i>
    </div>`
  }
  else{
    console.log("Draw!");
    document.getElementById("output").innerHTML="Draw!";
    document.getElementById("draw").value = ++draw;
    let rock = document.getElementById("hello2");
    rock.innerHTML = `<div class="rock3" id="scissor">
    <i class="fa-solid fa-hand-scissors"></i>
    </div>`
  }
} 

document.getElementById("button").onclick = function(){
  win=0;
  draw=0;
  lose=0;
  document.getElementById("draw").value=0;
  document.getElementById("win").value=0;
  document.getElementById("lose").value=0;
  document.getElementById("hello1").innerHTML="";
  document.getElementById("hello2").innerHTML="";
  document.getElementById("output").innerHTML = "";
  
  
}
