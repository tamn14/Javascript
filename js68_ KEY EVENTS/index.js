

const myBox = document.getElementById("myBox");


// document.addEventListener("keydown", event => {
//     myBox.textContent = "😍";
//     myBox.style.backgroundColor = "tomato";
// })





// document.addEventListener("keyup", event => {
//     myBox.textContent = "😒";
//     myBox.style.backgrouc



const moveAmount = 20;
let x = 0;
let y = 0;
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;  
                break;
            case "ArrowRight":  
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});


