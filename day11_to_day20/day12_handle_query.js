const express = require('express');
const app = express();


app.get('/search', (req, res) => {

    const query = req.query.query;
    const sort = req.query.sort;

    res.send(`Search Query: ${query}, Sort Order: ${sort}`);
});

app.get('/search', (req, res) => {
    const query = req.query.query || 'default query';
    const sort = req.query.sort || 'asc';

    res.send(`Search Query: ${query}, Sort Order: ${sort}`);
});


app.get('/products', (req, res) => {
    const category = req.query.category;
    const priceRange = req.query.priceRange;
    const inStock = req.query.inStock;

    res.send(`Category: ${category}, Price Range: ${priceRange}, In Stock: ${inStock}`);
});

app.get('/items', (req, res) => {
    const search = req.query.search;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const page = req.query.page ? parseInt(req.query.page) : 1;

    res.send(`Search: ${search}, Limit: ${limit}, Page: ${page}`);
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
