const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json());

myproducts = [
    { id: 1, name: 'shoe', description: 'black leather' },
    { id: 2, name: 'shirt', description: 'white shirt' },
    { id: 3, name: 'suit', description: 'black suit' },
];


app.get('/products', (req, res) => {




            app.get('/products/:id', (req, res) => {
                const productId = req.params.id;
                res.json()



            });

            app.post('/products', (req, res) => {
                const newProduct = req.body;
                // Logic to create a new product in the database
                // Return the created product as JSON response
            });

            app.put('/products/:id', (req, res) => {
                const productId = req.params.id;
                const updatedProduct = req.body;
                // Logic to update a specific product by ID in the database
                // Return the updated product as JSON response
            });

            app.delete('/products/:id', (req, res) => {
                const productId = req.params.id;
                // Logic to delete a specific product by ID from the database
                // Return a success message as JSON response
            });

            // Start the server
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });