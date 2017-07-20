//constructor which can be used to create objects with the ".raining",
//".noise", and ".makeNoise" properties

//capital A denotes that a constructor is used
function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    };
}

//sets variables "dogs" and "cats" to be animal objects and initializes them with...
var dogs = new Animal(true, "woof");
var cats = new Animal(false, "meow");

//calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

//if we want, we can change an object's properties after they're created
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
    if (dogs.raining === true && cats.raining === true) {
        console.log("MASS HYSTERIA");
    }
}