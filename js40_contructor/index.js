
function car(make , model , year , color ){
    this.make = make; 
    this.model =  model  ; 
    this.year = year ;  
    this.color = color ; 
}


const car1 = new car("Ford" , "mustang" , "2024" , "red") ;  
console.log(car1.make)
console.log(car1.year)