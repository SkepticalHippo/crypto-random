const assert = require('chai').assert;
const Random = require('../random');

describe('Random', () => {
    describe('value()', () => {
        it('generates a number between 0 inclusive and 1 exclusive', () => {
            const value = Random.value();

            assert.isTrue(0 <= value, 'should be more than or equal to 0');
            assert.isTrue(1 > value, 'should be less than 1');
        });
    });

    describe('range(min, max)', () => {
        it('generates a number within the given range', () => {
            const value = Random.range(10, 100);

            assert.isTrue(10 <= value, 'should be more than or equal to 0');
            assert.isTrue(100 > value, 'should be less than or equal to 100');
        });

        it('generates a number including min value and excluding max value', () => {
            assert.equal(0, Random.range(0, 1));
        });

        it('distributes values evenly', () => {
            const occurances = new Array(100);

            /** Generate a large array of values. */
            const values = new Uint32Array(10000).map((value) => {
                return Random.range(0, 100);
            });

            /** Count how many times does each value in the array occur. */
            values.forEach((value) => {
                occurances[value] = (occurances[value] || 0) + 1;
            });

            const range = new Uint32Array(100).map((value, index) => {
                return index;
            });

            /** Contains each of the values at least once. */
            range.forEach((value) => {
                assert.isTrue(values.includes(value), 'should contain '+value);
            });

            occurances.forEach((value, index) => {
                assert.approximately(value / values.length, 100 / values.length, 0.01);
            });
        });
    });
});
