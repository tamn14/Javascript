
const myBox = document.getElementById("myBox");

// function changeColor(event) {
//     event.target.style.backgroundColor = "red";
//     event.target.textContent  = "Huong la cua anh❤️❤️❤️";


// }

myBox.addEventListener("click", event=>{
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Huong la cua anh❤️❤️❤️";
});  


myBox.addEventListener("mouseover", event=>{
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Tien la cua anh❤️❤️❤️";
});c


myBox.addEventListener("mouseout", event=>{
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "Luyen la cua anh❤️❤️❤️";
});

