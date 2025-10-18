const dino = document.getElementById("dino");
console.log(dino);

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 700);
  }
}

const isAlive = setInterval(function(){
   const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
   const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

   // detect collision

   if(cactusLeft<50 && cactusLeft>0 && dinoTop >=140){
    alert("game Over Collison Detected")
   }

} , 10)



document.addEventListener("keydown", function () {
  jump();
});

let score = 0;
let scoreInterval = setInterval(() => {
  score++;
  document.getElementById("score").innerText = "Score: " + score;
}, 1000);
