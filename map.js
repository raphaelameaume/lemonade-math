/**
 * Convert a number from one range to an other
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @param {number} nmin
 * @param {number} nmax
 * @returns {number}
 */
export function map(value, min, max, nmin, nmax) {
	return ((value - min) / (max - min)) * (nmax - nmin) + nmin;
}
