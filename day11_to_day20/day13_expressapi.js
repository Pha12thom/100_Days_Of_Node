const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json());

myProducts = [
    { id: 1, name: 'shoe', description: 'black leather' },
    { id: 2, name: 'shirt', description: 'white shirt' },
    { id: 3, name: 'suit', description: 'black suit' },
    { id: 4, name: 'book', description: '100 days of code' },
    { id: 5, name: 'Necklace', description: 'Silver' },
];


app.get('/', (req, res) => {
    res.json(myProducts);
});

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = myProducts[productId - 1];
    res.json(product);
});

app.post('/products', (req, res) => {
    const newProduct = req.body;
    myProducts.push(newProduct);
    res.json(newProduct);
});

app.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    myProducts[productId - 1] = updatedProduct;
    res.json(updatedProduct);

});

app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    myProducts.splice(productId - 1, 1);
    res.json(myProducts);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});