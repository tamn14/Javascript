
class parent  { 
    constructor(name) {
        this.name =name ; 
    }

    parent_greet() {
        console.log("Chao :  " + this.name) ; 
    }

}

class children extends parent {
    constructor(name , age) {
        super(name) ;  
        this.age = age ; 
    }

    

    children_greet() {
        console.log("Xin chao : " + this.name+  "tuoi :  " + this.age)
    }

    children_setter(c) {
        this.age = c ; 

    }

    children_getter() {
        return this.age ; 
    }
}

// Tạo đối tượng từ lớp con
const child1 = new children("Alice", 25);

// Sử dụng phương thức từ lớp cha
child1.children_greet(); // Kết quả: "Hello, my name is Alice."

// Sử dụng phương thức từ lớp con
child1.parent_greet();


child1.children_setter(28)
console.log(child1.children_getter()) ; 


