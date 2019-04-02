//Observables
//I used converting Promise to Observables

//This *** is ***!
let str = "This house is nice!";
let isPromise = true;
//isPromise = false;

const { from } = rxjs;

let filterWords = function (arg) {
    //console.log(arg[0]);
    return new Promise(function (resolve, reject) {
        if (isPromise)
            resolve(str.replace(arg[0], "***").replace(arg[1], "***"));
        else reject("This is false");
    })
}

//filterWords(["house", "nice"]).then(s => console.log(s)).catch(err => console.log(err))
from(filterWords(["house", "nice"]))
    .subscribe((e) => console.log(e));

