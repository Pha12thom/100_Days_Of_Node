console.time('Timer');
for (let i = 0; i < 100; i++) {
    console.log("i am the specified timer")
}
console.timeEnd('Timer');

function firstFunction() {
    secondFunction();
}

function secondFunction() {
    thirdFunction();
}

function thirdFunction() {
    console.trace("trace message")
}

firstFunction();