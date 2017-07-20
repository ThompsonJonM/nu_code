function DigitalPal (hungry, sleepy, bored, age) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function() {
        if (this.hungry === true) {
            console.log("That was yummy!");
        } else if (this.hungry === false) {
            console.log("No thanks, I am full!");
        }
    }

    this.sleep = function() {
        if (this.sleepy === true) {
            console.log("Zzzzzz");

        } else if (this.sleepy === false) {
            console.log("No way! I'm not tired!");
        }
    }

    this.play = function() {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
        } else if(this.bored === false) {
            console.log("Not right now. Maybe later?");
        }
    }
}

var dog = new DigitalPal(true, true, false, 0);

dog.feed();
dog.sleep();
dog.play();