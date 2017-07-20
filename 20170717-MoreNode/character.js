//character function
function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function() {
        console.log("\n--------------------------");
        console.log("Name: " + this.name, "\nProfession: " + this.profession, 
        "\nGender: " + this.gender, "\nAge: " + this.age, "\nStrength: " + this.strength, 
        "\nHit Points: " + this.hp);
    }
    this.isAlive = function() {
        if (this.hp > 0) {
            console.log("\n--------------------------");
            console.log(this.name + " is alive!");
            return true;
        } else {
            console.log("\n--------------------------");
            console.log(this.name + " needs a rez!");
            return false;
        }
    };
}

var playerOne = new Character("Andrew", "Blacksmith", "Male", 
30, 100, 1000);
var playerTwo = new Character("Renslay", "Engineer", "Male", 
30, 4367, 1000)

playerOne.printStats();
playerTwo.printStats();

playerOne.isAlive();
playerTwo.isAlive();

//playerOne.hp = 0;
//playerOne.isAlive();

//playerTwo.hp = 1;
//playerTwo.isAlive();