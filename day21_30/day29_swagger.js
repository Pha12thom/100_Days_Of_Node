import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const app = express();
app.use(express.json());

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger User API',
            description: 'User API Information',
            contact: {
                name: 'Amazing Developer'
            },
        },
        servers: [{
            url: 'http://localhost:3000'
        }],
    },
    apis: ['./day29_swagger.js'], // Path to your API docs
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /login:
 *   get:
 *     summary: Login a user
 *     description: Use to log in a user
 *     responses:
 *       200:
 *         description: A successful login response
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Use to register a new user
 *     responses:
 *       200:
 *         description: A successful registration response
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get user details
 *     description: Use to get the details of a user
 *     responses:
 *       200:
 *         description: A successful response with user details
 */

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/login', (req, res) => {
    res.send('Login successful');
});

app.get('/register', (req, res) => {
    res.send('Register successful');
});

app.get('/user', (req, res) => {
    res.send('User details');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});