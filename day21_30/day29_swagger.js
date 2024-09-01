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
            servers: {
                url: 'http://localhost:3000'
            }
        }
    },
    apis: ['./day29_swagger.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});