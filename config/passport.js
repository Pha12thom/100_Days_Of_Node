const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user'); // User model (mock)

module.exports = function(passport) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            const user = User.findByUsername(username); // Find user in the mock DB
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        const user = User.findById(id); // Find user by id in the mock DB
        done(null, user);
    });
};