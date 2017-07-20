function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
    this.printInfo = function() {
        console.log("\n--------------------------------------");
        console.log("\nName: " + name, "\nJob Title: " + position, "\nAge: " + age, "\nFav. Programming Language: " + language);
        console.log("\n--------------------------------------");
    };
}
    
var programmerOne = new Programmer("Andrew", "Developer", 30, "Ruby");

programmerOne.printInfo();