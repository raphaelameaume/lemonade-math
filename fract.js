/**
 * Compute the fractional part of the argument
 * @param {number} value
 * @returns {number}
 */
export function fract(value) {
	return value - Math.floor(value);
}
