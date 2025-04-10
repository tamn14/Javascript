

const person1 = { 
    firstName : "Diem " ,  
    lastName  : "Huong" ,
    age  : 27 , 
    isWife  : function(name) {
        console.log(this.lastName +" la cua " +  name)
    }
    

}


person1.isWife("Tam"); 
