class Product{
    private name: String;
    private price: Number
    constructor(name: string, price: number){
        this.name = name 
        this.price = price
        console.log("Inside constructor")
    }

    display(){
        console.log(`Name of the product is: ${this.name}`)
        console.log(`Price of the product is: ${this.price}`)
        this.priDisplay()
    }

    private priDisplay(){
        console.log("Hello, my name is Ashish Shah")
    }
}

const productOne = new Product("Rice", 23)
productOne.display()