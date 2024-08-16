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


console.log("now ill write to a differnt file")

fs.writeFile('day6node.txt', 'Hello Write file asyncronously', (err) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log("File written successfully");
        console.log("Now reading the written text in file");
        fs.readFile('day6node.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(data);
        });

    }
});

fs.writeFileSync('day6node2.txt', 'Hello Write file syncronously');
console.log("File written syncronously");
console.log("Now reading the written text in file");
