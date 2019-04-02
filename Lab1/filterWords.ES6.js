//Use ES6 feature, not allowed to use for-loop

//This *** is ***!
String.prototype.filterWords = function(arg){
    return this.split(/[! ]/)
        .map(m => arg.find(e => m == e) ? "***" : m)
        .join(" ");
    
};

console.log("This house is nice!".filterWords(['house', 'nice']));

