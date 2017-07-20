function DigitalPal (hungry, sleepy, bored, age) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
        } else {
            console.log("I'm full");
        }
    }

    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzz");
            this.increaseAge();
        } else {
            console.log("I'm not tired");
        }
    }

    this.play = function () {
        if (this.bored) {
            console.log("Let's play");
        } else {
            console.log("Not right now");
        }
    }

    this.increaseAge = function () {
        this.age++;
        console.log("Happy birthday to me");
    }
}

//not defining parameters as the above parameters are the 
//"factory settings" for the assignment
var dog = new DigitalPal();

dog.outside = false;
dog.bark = function () {};
dog.goOutside = function () {};
dog.goInside = function () {};