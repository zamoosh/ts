class Person {
    public first_name: string;
    public last_name: string;

    constructor(first_name: string, last_name: string) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    get full_name(): string {
        return this.first_name + " " + this.last_name;
    }

    walking() {
        console.log('walking');
    }
}


class Student extends Person {
    private _id: number;

    constructor(id: number, first_name: string, last_name: string) {
        super(first_name, last_name);
        this._id = id;
    }

    takeTest() {
        console.log('taking test');
    }
}

class Teacher extends Person {

    override get full_name(): string {
        return "Professor" + " " + super.full_name;
    }
}

// let ali = new Student(1, 'ali', 'rahimi');
// ali.walking();
// ali.takeTest();
// console.log(ali.full_name);

let ali = new Teacher('ali', 'rahimi');
console.log(ali.full_name);