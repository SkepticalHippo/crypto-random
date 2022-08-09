const Random = require('./random');

describe('Random', () => {
    describe('value()', () => {
        it('generates a number between 0 inclusive and 1 exclusive', () => {
            const value = Random.value();

            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThan(1);
        });
    });

    describe('range(min, max)', () => {
        it('generates a number within the given range', () => {
            const value = Random.range(10, 100);

            expect(value).toBeGreaterThanOrEqual(10);
            expect(value).toBeLessThan(100);
        });

        it('generates a number including min value and excluding max value', () => {
            expect(Random.range(0, 1)).toEqual(0);
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

            const ratio = occurances.length / values.length;

            /** Contains each of the values at least once. */
            range.forEach((value) => {
                expect(values.includes(value)).toBeTruthy();
            });

            occurances.forEach((value) => {
                expect(value / values.length).toBeCloseTo(ratio, 2);
            });
        });
    });
});
