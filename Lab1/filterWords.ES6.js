//Use ES6 feature, not allowed to use for-loop

//This *** is ***!
String.prototype.filterWords = function(arg){
    return this.replace(arg[0], "***").replace(arg[1], "***");
    
};

console.log("This house is nice!".filterWords(['house', 'nice']));

