const express = require('express');
const app = express();


app.get('/items/:id', (req, res) => {

    const itemId = req.params.id;

    const mockDatabase = {
        '1': { id: 1, name: 'Item 1', description: 'here is Item 1' },
        '2': { id: 2, name: 'Item 2', description: 'hers is Item 2' },

    };

    const item = mockDatabase[itemId];
    if (item) {

        res.json(item);
    } else {

        res.status(404).send('Item not found');
    }
});



app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});