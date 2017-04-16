const assert = require('chai').assert;
const Random = require('../random');

describe('Random', () => {
    describe('value()', () => {
        it('generates a number between 0 inclusive and 1 exclusive.', () => {
            const value = Random.value();

            assert.isTrue(0 <= value, 'should be more than or equal to 0');
            assert.isTrue(1 > value, 'should be less than 1');
        });
    });

    describe('range(min, max)', () => {
        it('generates a number within the given range.', () => {
            const value = Random.range(10, 100);

            assert.isTrue(10 <= value, 'should be more than or equal to 0');
            assert.isTrue(100 >= value, 'should be less than or equal to 100');
        });
    });
});
