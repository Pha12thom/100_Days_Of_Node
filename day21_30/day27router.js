import router from 'day27_expressRouter';

app.use('/api', router);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});