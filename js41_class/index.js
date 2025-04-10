

class Product {
    constructor (name , price , discount) {
        this.name = name ;   
        this.price = price ; 
        this.discount = 0.1 ; 
    }

    displayProduct() {
        console.log("Product : " + this.name) ; 
        console.log("Price : " + this.price) ;  
    }

    totalPrice () {
        console.log ("Total Price :  " + Math.floor(this.price * 0.9)  )
    }


    


}

const P1 = new Product("Huong", 99999999999999) ; 
const P2 = new Product("Tien" , 9999999999999999) ; 

P1.displayProduct() ; 
P2.displayProduct() ; 

P1.totalPrice(); 