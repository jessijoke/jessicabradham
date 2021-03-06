numBalls = 7;
const balls = [];
let bubbleContainer = document.getElementById("bubble-container");


function initializeBubbles() {
    for (let i = 0; i < numBalls; i++) {
        createBall();
    }
}

initializeBubbles(); 

function createBall() {
  let ball = document.createElement("ball");
  ball.classList.add("ball");
  ball.style.left = `${Math.floor(Math.random() * 35)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 25)}vh`;
  ball.style.transform = `scale(${Math.random()})`
  ball.style.width = `${(Math.floor(Math.random() * 30) + 5)}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
  
  let to = {
    x: Math.random() * (1 % 2 === 0 ? -11 : (Math.random() * 40)),
    y: Math.random() * (Math.random() * 40)
  };

  let anim = ball.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 2) * 2000, 
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
}
/*
let theBall = document.querySelectorAll("ball");


theBall[1].addEventListener("mouseover", moveBall);

function moveBall() {
    console.log('BALLLLLLL');
    let to = {
        x: Math.random() * (1 % 2 === 0 ? -11 : 22),
        y: Math.random() * 24
      };
    let anim = theBall[1].animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 2) * 2000, 
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
}
*/

let bubbles = document.querySelectorAll("ball");
let bubbleCount = bubbles.length - 1;

for (let i = 0; i < bubbles.length; i++) {
    addNewBubbleEvent(bubbles[i]);
}

function addNewBubbleEvent(bubble) {
    bubble.addEventListener('click', (e)=> {
        console.log("click");
        this.removeEventListener('click', (e));
        bub = bubble;
        bub.remove();
        createBall();
        //bubbleCount += 1;
        //addNewBubbleEvent(bubbles[bubbleCount]);
    });
}