let bubbleContainer = document.getElementById("bubble-container");

class Bubble {
    constructor(containingDiv) {
        let bubble = document.createElement("ball");
        bubble.classList.add("ball");
        bubble.style.left = `${Math.floor(Math.random() * 100)}vw`;
        bubble.style.top = `${Math.floor(Math.random() * 100)}vh`;
        bubble.style.transform = `scale(${Math.random()})`;
        bubble.style.width = `${(Math.floor(Math.random() * 30) + 5)}em`;
        bubble.style.height = bubble.style.width;
        containingDiv.append(bubble);

        let to = {
            x: Math.random() * (1 % 2 === 0 ? -11 : (Math.random() * 40)),
            y: Math.random() * (Math.random() * 40)
          };
        
          let anim = bubble.animate(
            [
              /*{ transform: "translate(0, 0)" },*/
              { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
              duration: (Math.random() + 5) * 2000, 
              direction: "alternate",
              fill: "both",
              iterations: Infinity,
              easing: "ease-in-out"
            }
          );

          bubble.addEventListener('click', (e)=> {
            console.log("click");
            bubble.removeEventListener('click', (e));
            bubble.remove();
            bubbles[bubbles.length] =  new Bubble(bubbleContainer);
            bubbles.push(bubbles[bubbles.length]);
          });
    }

}

let bubbles = []
for (let i = 0; i < 11; i++) {
    bubbles[i] = new Bubble(bubbleContainer);
    bubbles.push(bubbles[i]);
}
