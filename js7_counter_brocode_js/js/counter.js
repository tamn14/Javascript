

const increaseBtn  = document.getElementById("increaseBtn")
const resetBtn = document.getElementById("resetBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const lable = document.getElementById("lable") 

let count =  0 

increaseBtn.onclick = function() {
    count++ 
    lable.innerHTML = count 
}

resetBtn.onclick = function() {
    count = 0 ; 
    lable.innerHTML = count 
}

decreaseBtn.onclick = function(){
    count = (count > 0) ? count- 1 :count 
    lable.innerHTML = count

}

