function doSomething(value, callback) {
    var result = value * 10;
    callback(result);
}

doSomething(10, function (result) {
    console.log(result);
})