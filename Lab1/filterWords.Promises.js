//Promises

//This *** is ***!
let str = "This house is nice!";
let isPromise = true;
//isPromise = false;

let filterWords = function (arg) {
    //console.log(arg[0]);
    return new Promise(function (resolve, reject) {
        if (isPromise)
            resolve(str.split(/[! ]/)
                        .map(m => arg.find(e => m == e) ? "***" : m)
                        .join(" ") );
        else reject("This is false");
    })
}

//console.log("This house is nice!".filterWords(['house', 'nice']));
filterWords(["house", "nice"])
    .then(s => console.log(s))
    .catch(err => console.log(err));
