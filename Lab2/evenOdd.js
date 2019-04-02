// Array.prototype.even = function(){
//     return this.filter(e => (e % 2 == 0));
// }

// Array.prototype.odd = function () {
//     return this.filter(e => (e % 2 != 0));
// }

Array.prototype.even = function(){
    let p = new Promise(
        (resolve, reject) => { resolve(this.filter(e => (e % 2 == 0))); }
    );
    p.then(p => console.log(p));
}

Array.prototype.odd = function () {
    let p = new Promise(
        (resolve, reject) => { resolve(this.filter(e => (e % 2 == 1))); }
    );
    p.then(p => console.log(p));
}

console.log("start");
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log("end");

