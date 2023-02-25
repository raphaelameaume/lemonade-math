/**
 * Compute the fractional part of a value
 * @param {number} value
 * @returns {number}
 */
export function fract(value) {
	return value - Math.floor(value);
}
