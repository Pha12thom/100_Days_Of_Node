const express = require('express');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const path = require('path');

// Initialize Express
const app = express();

// Passport Config
require('./config/passport')(passport);

// Express session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash for error messages
app.use(flash());

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

// Set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/auth'));

// Define the login route
app.get('/login', (req, res) => {
    res.render('login', { message: req.flash('error') });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});