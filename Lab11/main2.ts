class University2{
    constructor(public name: string, public dept: string){}

    graduation(year: number){
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let mum2 = new University2("MUM", "Computer Science");
mum2.graduation(2019);
