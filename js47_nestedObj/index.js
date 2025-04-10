

// const person = {
//     fullname :  "Tam" , 
//     age  : 22 , 
//     isWife : false  ,  
//     hobbies : ["Huong",  "Tien"  ,  "Luyen"], 
//     addrress : {
//         street : "124 street  "  , 
//         city  :  "can tho", 
//         country:  "vietnam"
//     }


// }

// console.log(person.fullname) 
// console.log(person.age) 
// console.log(person.isWife)
// console.log(person.hobbies[0])
// console.log(person.addrress.city)



class person {
     constructor(fullname , age  , isWife, listHobbies , address ) {
        this.fullname = fullname ;  
        this.age =  age ; 
        this.isWife  = isWife ;  
        this.listHobbies = listHobbies ; 
        this.address = address;
     }

}


class address{ 
    constructor(street , city  ,country) {
        this.street = street 
        this.city = city  
        this.country = country
    }



}


class Hobbies {
    constructor (childHobbies ,  youngHobbies , oldderBobbies) {
        this.childHobbies = childHobbies ;
        this.youngHobbies = youngHobbies ;  
        this.oldderBobbies = oldderBobbies ;    
    }
}

address = new address ("124 - street" , "can tho" , "VietNam") 
Hobbies1  = new Hobbies("Luyen" , "Tien",  "Huong")
Hobbies2  = new Hobbies("Phuong" , "Hang",  "Chi")
Hobbies3  = new Hobbies("Bao Nhi" , "Van anh",  "Ngoc")

listHobbies  = [] ;  
listHobbies.push(Hobbies1)
listHobbies.push(Hobbies2)
listHobbies.push(Hobbies3)


person  = new person("Tam" ,23 ,  false , listHobbies , address  )

console.log(person.fullname) 
console.log(person.age) 
console.log(person.isWife)
console.log(person.listHobbies[2].youngHobbies)
console.log(person.address.city) 
