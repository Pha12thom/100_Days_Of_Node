import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const app = express();
app.use(express.json())

const swaggerOptions = {
    definition: {
        info: {
            title: 'swagger User API',
            description: 'User API Information',
            contact: {
                name: 'Amazing Developer'
            },
            servers: ['http://localhost:3000']
        }
    },
    apis: ['./day29_swagger.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));