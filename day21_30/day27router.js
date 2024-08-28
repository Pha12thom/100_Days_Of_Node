import router from 'day27_expressRouter.js';

const app = express();
app.use('/api', router);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});