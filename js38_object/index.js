

const person1 = { 
    firstName : "Diem " ,  
    lastName  : "Huong" ,
    age  : 27 , 
    isWife : true 

}
const person2 = { 
    firstName : "Kieu " ,  
    lastName  : "Tien" ,
    age  : 23 , 
    isWife : true ,  
    sayHello  :  function(){
        console.log(this.firstName + " " +this.lastName + " La vo Tam")
        console.log("Anh thuong " + this.lastName +  " nhieu lam")

    } 

}

console.log(person1.firstName) 
console.log(person1.lastName)
console.log(person2.age) 
console.log(person2.isWife)

person2.sayHello()

