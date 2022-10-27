const abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const buttons = document.getElementById("buttons");
const timer = document.getElementById("timer");
let interval = null;

function addLetter(letter, root) {
  const button = document.createElement("button");
  const text = document.createTextNode(letter);
  button.appendChild(text);
  root.appendChild(button)
  return button;
}

function letterClicked (a) {
  this.disabled = true;
  window.clearInterval(interval)
  interval = activateTimer()
}

function activateTimer() {
  let secounds = 5;
  timer.innerHTML = secounds;

  return setInterval(function () {
    secounds -= 1;
    if(secounds < 0){
      console.log('Perdiste');
      gameOverSecuence()
    } else {
      timer.innerHTML = secounds;
    }
  }, 1000)
}

function gameOverSecuence() {
  window.clearInterval(interval)
  gameOverDiv.style.visibility = "visible";
}

[...abc].forEach(letter => {
  const button = addLetter(letter, buttons);
  button.addEventListener('click', letterClicked);
})

