const express = require('express');

const app = express();

// Serve static files from the "webview" directory
app.use(express.static('webview'));

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});