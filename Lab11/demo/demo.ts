class University {
    private name: string;
    private dept: string;

    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }

    graduation(year: number) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let mum = new University("MUM", "Computer Science");
mum.graduation(2019);
