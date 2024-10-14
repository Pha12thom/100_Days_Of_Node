const users = [
    { id: 1, username: 'testuser', password: 'password' }
];

module.exports = {
    findByUsername: (username) => {
        return users.find(user => user.username === username);
    },
    findById: (id) => {
        return users.find(user => user.id === id);
    }
};