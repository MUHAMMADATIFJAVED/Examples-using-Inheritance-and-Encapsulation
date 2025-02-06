// Parent class (Vehicle)
class Vehicle {
    #speed = 0;  // Encapsulation: private property
    #fuelLevel = 100; // Private property

    constructor(type) {
        this.type = type;
    }

    accelerate(amount) {
        if (this.#fuelLevel > 0) {
            this.#speed += amount;
            this.#fuelLevel -= 5;
        } else {
            alert(this.type + " has run out of fuel!");
        }
        return this.#speed;
    }

    getSpeed() {
        return this.#speed;
    }
}

// Child class (Car)
class Car extends Vehicle {
    constructor() {
        super("Car");
    }
}

// Child class (Bike)
class Bike extends Vehicle {
    constructor() {
        super("Bike");
    }
}

// Create instances
const myCar = new Car();
const myBike = new Bike();

// Function to update UI when accelerating
function accelerateCar() {
    let speed = myCar.accelerate(10);
    document.getElementById("car-info").innerText = `Speed: ${speed} km/h`;
}

function accelerateBike() {
    let speed = myBike.accelerate(5);
    document.getElementById("bike-info").innerText = `Speed: ${speed} km/h`;
}
