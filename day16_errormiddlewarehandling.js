const express = require('express');
const app = express();
const fs = require('fs');


const data = fs.readFileSync('day6node.txt', 'utf-8');
app.get('/', (req, res) => {

        const data = fs.readFileSync('day6node.md', 'utf-8');
        try {

            res.end(data);
        } catch (error) {
            res.end(error);
        }
    }

);

app.listen(3000, () => {
    console.log("server running on port 3000")
})