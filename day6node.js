const fs = require('fs');

fs.readFile('day6node.md', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});


console.log(
    setTimeout(() => {
        console.log("This is a timeout FOR end of readfile");
    }, 1000), "we now read the file asyncronously");


const data = fs.readFileSync('day6node.md', 'utf8');
console.log(data);