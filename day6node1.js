const fs = require('fs');

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

fs.unlink('day6node2.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File deleted successfully");
});

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
});