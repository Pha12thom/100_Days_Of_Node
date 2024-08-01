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