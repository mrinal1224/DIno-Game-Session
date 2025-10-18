const dino = document.getElementById("dino");
console.log(dino);

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 1000);
  }
}

document.addEventListener("keydown", function () {
  jump();
});
