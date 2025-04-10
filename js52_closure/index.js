

function outer() {
    let mess = "hello"
    function inner() {
        console.log(mess)
    }

    inner() ; 

}
mess= "good bye"
outer() ;


function createCounter() {
    let count   =  0  ; 
    return function() {
        count++ ; 
        console.log(count) ; 
    } ; 
}

const counter = createCounter(); 
counter();
counter();

counter();


function multiplyBy(factor) {
    return  function(number) {
        return number * factor ;  
    };


}

const  double = multiplyBy(2) ;  
console.log(double(5));  


const  triple =  multiplyBy(3) ; 
console.log(triple(5))


