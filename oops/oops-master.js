class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printAge() {
        console.log(`Age is: ${this.age}`);
    }

    printName() {
        console.log(`Name is: ${this.name}`);
    }
}

const one = new Person('Ashish', 32);
// one.printAge();



const Vehical = class {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    printMake() {
        console.log(this.make);
    }

    printModel(){
        console.log(this.model);
    };
};

const Car = class extends Vehical{
    constructor(make, model){
        // super.make = make
        // super.model = model
        super(make)
        super(model)
    }

    drive(){
        console.log(this.model)
    }
}

const myCar = new Car("Toyota", "City")
console.log(myCar)
myCar.drive()
myCar.printMake()

// const oneCar = new Vehical('Toyota', 'camery');
// console.log(oneCar);
// oneCar.printMake();
// oneCar.printModel()
