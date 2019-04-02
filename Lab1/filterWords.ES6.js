//This *** is ***!
//Use ES6 feature, not allowed to use for-loop
String.prototype.filterWords = function(){
    return this.replace(arguments[0], "***").replace(arguments[1], "***");
};

console.log("This house is nice!".filterWords(['house', 'nice']));

//Promises
//Async/Await
//Observables
