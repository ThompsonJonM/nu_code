// function accepts string and other function
function foo (str, fn) {
    console.log(str);
    fn();
}

foo("boo", function() {
    console.log("I'm a plastic man...");
});

var predefinedFn = function() {
    console.log("I'm predefined");
}

foo("I love Jordans", predefinedFn);

var p = new Promise(function(resolve, rejet) {
    resolve("I love Jordan");
})

p.then(function(result) {
    console.log(result);
})


// function inside function (closures)
function bar () {
    var f = "hello"
    function baz() {
        console.log(f);
    }
    baz();
}

// function accepts boolean and other function
function fooTwo () {

}