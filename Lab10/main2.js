var University2 = /** @class */ (function () {
    function University2(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University2.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
    return University2;
}());
var mum2 = new University2("MUM", "Computer Science");
mum2.graduation(2019);
