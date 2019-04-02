//Async/Await

//This *** is ***!
var str = "This house is nice!";
var isPromise = true;
//isPromise = false;

let filterWords = function (arg) {
    //console.log(arg[0]);
    return new Promise(function (resolve, reject) {
        if (isPromise)
            resolve(
                //"This is true"
                str.replace(arg[0], "***").replace(arg[1], "***")
            );
        else reject("This is false");
    })
}

// //console.log("This house is nice!".filterWords(['house', 'nice']));
// var askMe = function() {
    // filterWords(["house", "nice"])
    //     .then(s => console.log(s))
    //     .catch(err => console.log(err));
// };

// askMe();
// console.log("Finish");

async function askMe(){
    try{
        let results = await filterWords(["house", "nice"]);
        console.log(results);
    }
    catch(error){
        console.log(error);
    }
}

askMe();
console.log("Finished");