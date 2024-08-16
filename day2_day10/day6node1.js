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



fs.writeFile('day6node2.txt', 'Hello Write file asyncronously', (err) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log("File written successfully");
        console.log("Now reading the written text in file");
        fs.readFile('day6node2.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(data);
        });

    }
});

fs.unlinkSync('day6node2.txt');
console.log("File deleted syncronously");

fs.writeFile('day6node2.txt', 'Hello Write file asyncronously again', (err) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log("File written successfully");
        console.log("Now reading the written text in file");
        fs.readFile('day6node2.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(data);
        });

    }

    fs.rename("day6node2.txt", "day6noderename.txt", (err) => {
        if (err) {
            console.log("error while renaming file");
        }
        console.log("file renamed to day6noderename.txt");
    });
});