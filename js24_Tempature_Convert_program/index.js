
function convertToCel (cel) {
    return (cel -32) * (5/9) 
}

function convertToFahr (Fahr) {
    return (Fahr *(9/5)) + 32  
}


function check()  {
    const value  = document.getElementById("textbox").value
    const cel =  document.getElementById("toCelsius")
    const Fahr = document.getElementById("toFahrenheit")
    let kq = "" 
    if(cel.checked) {
        kq = Math.floor(convertToCel(value)) + "C"
    }

    else {
       kq =  Math.floor( convertToFahr(value) )+  "F"
    }

    document.getElementById("kq").innerHTML= kq
    
}

function main() {
    const submit = document.getElementById("submit")
    
    submit.addEventListener("click",check )
}


main(); 




