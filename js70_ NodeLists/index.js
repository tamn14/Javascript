
let myButtons = document.querySelectorAll(".myButtons"); 

myButtons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "tomato" ; 
        event.target.textContent += "😒" ; 
    });  
   

});

// add an element
const newButton = document.createElement("Button") ;  //step1
newButton.textContent = "Button 5" ;  //step2
newButton.classList = "myButtons"; 
document.body.appendChild(newButton) ; //step3



 



