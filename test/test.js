// test/test.js
const { expect } = require('chai');

// Function to test
function fetchData(callback) {
    setTimeout(() => {
        callback('data');
    }, 1000);
}

// Asynchronous test
describe('fetchData', function() {
    it('should return data after 1 second', function(done) {
        fetchData(function(data) {
            expect(data).to.equal('data');
            done(); // Indicates the test is complete
        });
    });
});