let bubbleContainer = document.getElementById("bubble-container");
let bubbleBurstContainer = document.createElement("div");
bubbleBurstContainer.classList.add("bubbleBurstContainer");
bubbleContainer.append(bubbleBurstContainer);

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

        let numX = Math.random() * 20;
        if (numX % 0 === 0) {
          numX = numX - (numX*2);
        }
        let numY = Math.random() * 20;
        if (numY % 0 === 0) {
          numY = numY - (numY*2);
        }

        let to = {
            x: Math.random() * (bubbles.length % 2 === 0 ? -11 : (numX)),
            y: Math.random() * (numY)
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

            let bubbleBurst = document.createElement("div");
            bubbleBurst.style.marginTop = (e.clientY-50)+"px";
            bubbleBurst.style.marginLeft = (e.clientX-50)+"px";
            bubbleBurst.classList.add("bubbleBurst");

            setTimeout(function(){ 
              bubbleBurst.remove();
            }, 1250);
            
              
            //clearTimeout(removeBubble);
    
            bubbleBurstContainer.append(bubbleBurst);

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
