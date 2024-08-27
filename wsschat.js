function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calculate() {
    let x = 10;
    let y = 5;

    let sum = add(x, y);
    console.log('Sum:', sum);

    let difference = subtract(x, y);
    console.log('Difference:', difference);
}

calculate();