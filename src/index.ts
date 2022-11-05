/*
let a: [number, string] = [1, 'string']

enum Size {Small = 1, Medium, Large}
*/

/*
let mySize: Size = Size.Medium;
console.log(mySize);
*/


/*
function calcTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

console.log(calcTax(50_000, 2022));
*/


/*function toKilograms(weight: number | string): number {
    if (typeof weight === "number")
        return weight * 2.2;
    else {

        return parseInt(weight) * 2.2;
    }
}*/


/*
class Person {
    private _id: number;
    age: number;
    first_name: string;
    last_name: string;
    nickname?: string;

    constructor(id: number, age: number, first_name: string, last_name: string) {
        this._id = id;
        this.age = age;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    talk(): void {
        console.log('talking');
    }

    get id(): number {
        return this.id;
    }
}

let mohammad = new Person(1, 20, 'mohammad', 'rahimi');
mohammad.talk();
console.log(mohammad);
console.log(mohammad?.nickname);
*/
