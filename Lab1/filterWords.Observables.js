//Observables

//This *** is ***!
let str = "This house is nice!";
let isPromise = true;
//isPromise = false;

const { from } = require("rxjs");

let filterWords = function (arg) {
    //console.log(arg[0]);
    return new Promise(function (resolve, reject) {
        if (isPromise)
            resolve(str.split(/[! ]/)
                        .map(m => arg.find(e => m == e) ? "*".repeat(m.length) : m)
                        .join(" "));
        else reject("This is false");
    })
}

//filterWords(["house", "nice"]).then(s => console.log(s)).catch(err => console.log(err))
from(filterWords(["house", "nice"]))
    .subscribe((e) => console.log(e));
