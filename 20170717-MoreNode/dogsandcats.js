var dog = {
    noise: "woof",
    raining: true,
    makeNoise: function() {

        //use this.raining to get around scope issue
        //as raining is not within makeNoise scope
        if (this.raining) {

            //same as above
            console.log(this.noise);
        }
    }
};

//call the function
dog.makeNoise();

var cat = {
    raining: false,
    noise: "meow",
    makeNoise: function () {

        //if it is NOT raining the do not call the noise key (denoted by !this)
        if (!this.raining) {
            console.log(this.noise);
        }
    }
};

cat.makeNoise();