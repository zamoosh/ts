let a: [number, string] = [1, 'string']

enum Size {Small = 1, Medium, Large}

let mySize: Size = Size.Medium;
console.log(mySize);


function calcTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

console.log(calcTax(50_000, 2022));

