//This *** is ***!
//Use ES6 feature, not allowed to use for-loop

String.prototype.filterWords = function (arg) {
    //return this.replace("house", "***").replace("nice", "***");
    //return this.split(/[! ]/).map(m => arg.find(e => m == e) ? "***" : m).join(" ");
    return this.split(/[! ]/)
                .map(m => arg.find(e => m == e) ? "***" : m)
                .join(" ");
    //this.replace(arg[0], "***").replace(arg[1], "***");
};

console.log("This house is nice!".filterWords(['house', 'nice']));

