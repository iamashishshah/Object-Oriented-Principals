function Person(name, age){
    this.name = name
    this.age


}

function Car(make, model){
    this.make = make
    this.model = model

    // we can't directly create this but we can create variable ans assign function to it.
//    printModel(){
//         console.log("Model of this car is this: ",this.model)
//     }

    this.printModel = (money)=>{
        console.log("Model of this car is this: ", this.model)
        process.stdout.write(money)
        // console.log((("thsfdsf",("This is whole new line"))))
    }
}

const oneCar = new Car("Toyota", "camery")
const twoCar = new Car("Tata", "Curvv.ev")

console.log(oneCar)
oneCar.printModel("Money ransom")
