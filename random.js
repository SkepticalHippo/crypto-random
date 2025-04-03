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
     * Generate a random number between min (inclusive) and max (exclusive).
     * @param  {number} min
     * @param  {number} max
     * @return {number}
     */
    static range(min, max) {
        return Math.floor(this.value() * (max - min) + min);
    }
    /**
     * Get a random number between 0 (inclusive) and 1 (exclusive) using Node Crypto.
     * @return  {number}
     * @private
     */
    static _getNodeRandomValue() {
        const crypto = require('crypto');
        const buffer = crypto.randomBytes(8);
        const number = parseInt(buffer.toString('hex'), 16);
        return number / Math.pow(2, 64);
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

        return randomValues[0] / Math.pow(2, 32);
    }
}

module.exports = Random;
