// OO Challenge

// Part one
// CLASS
class Vehicle {
    // CONSTRUCTOR
    constructor(make,model,year){
        // properties
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // methods
    honk () {
        return 'Beep!';
    }
    toString() {
        return (`The ${this.make} that we speak of is a ${this.year} ${this.model}`);
    }
}

// Part Two
// CLASS using inheritance
class Car extends Vehicle {
    // make constructor but also 
    constructor(make,model,year) {
        // call parent constructor
        super(make, model, year);
        this.numWheels = 4;
    }
}


// Part Three

class Motorcycle extends Vehicle {
    // make constructor
    constructor(make,model,year) {
        // call parent constructor
        super(make, model, year);
        // change this instance
        this.numWheels = 2;
    }
    // add new method
    revEngine () {
        return 'VROOM VROOM';
        } 
}

// Part Four

class Garage {
    constructor(capacity){
        // properties
        this.vehicles = [];
        this.capacity = capacity;
    }

    add (newVehicle) {
        // if the input is not an instance of vehicle make response
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!';
        }
        // if the length of vehicles is greater than or equal to capacity make prompt
        if(this.vehicles.length >= this.capacity) {
            return 'Sorry we are full!';
        }
        // otherwise push the new vehicle to the garage if conditions met
        this.vehicles.push(newVehicle);
        return 'Vehicle added!!';
    }

}
