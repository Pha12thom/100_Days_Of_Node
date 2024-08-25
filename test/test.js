import { expect } from 'chai';
import { describe, it } from 'mocha';
import User from './usermodel';

function add(a, b) {
    return a + b;
}

describe('Addition', function() {
    it('should return 4 when adding 2 and 2', function() {
        expect(add(2, 2)).to.equal(4);
    });

    it('should return 0 when adding 2 and -2', function() {
        expect(add(2, -2)).to.equal(0);
    });
});