class Random {
    /**
     * Generate a random number between 0 (inclusive) and 1 (exclusive).
     * A drop in replacement for Math.random()
     * @return {number}
     */
    static value() {
        if(typeof window !== 'undefined' && (window.crypto || window.msCrypto)) {
            return this._getBrowserRandomValue();
        } else {
            return this._getNodeRandomValue();
        }
    }
    /**
     * Generate a random number in a given range.
     * @param  {number} min
     * @param  {number} max
     * @return {number}
     */
    static range(min, max) {
        return Math.floor(this.value() * (max - min + 1)) + min;
    }
    /**
     * Get a random number between 0 (inclusive) and 1 (exclusive) using Node Crypto.
     * @return  {number}
     * @private
     */
    static _getNodeRandomValue() {
        const crypto = require('crypto');
        const buffer = crypto.randomBytes(4);

        return this._intToFloat(buffer.readInt32BE(0));
    }
    /**
     * Get a random number between 0 (inclusive) and 1 (exclusive) using window.crypto.
     * @return  {number}
     * @private
     */
    static _getBrowserRandomValue() {
        const crypto = window.crypto || window.msCrypto;
        const randomValues = new Uint32Array(1);

        crypto.getRandomValues(randomValues);

        return this._intToFloat(randomValues[0]);
    }
    /**
     * Transform an integer to a floating point number.
     * @param   {number} integer
     * @return  {number}         float
     * @private
     */
    static _intToFloat(integer) {
        return Math.abs(integer / Math.pow(10, integer.toString().length));
    }
}

module.exports = Random;