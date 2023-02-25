import { length2D, length3D, length4D } from './length.js';

/**
 * Compute the unit vector of a vector
 * @param {[number, number]|[number, number, number]|[number, number, number, number]} a
 * @returns {[number, number]|[number, number, number]|[number, number, number, number]}
 */
export function normalize(a) {
	if (a.length === 2) return normalize2D(a);
	if (a.length === 3) return normalize3D(a);
	if (a.length === 4) return normalize4D(a);
}

/**
 * Compute the unit vector of a 2D vector
 * @param {[number, number]} a
 * @returns {[number, number]}
 */
export function normalize2D(a) {
	let len = length2D(a);

	return [a[0] * len, a[1] * len];
}

/**
 * Compute the unit vector of a 3D vector
 * @param {[number, number, number]} a
 * @returns {[number, number, number]}
 */
export function normalize3D(a) {
	let len = length3D(a);

	return [a[0] * len, a[1] * len, a[2] * len];
}

/**
 * Compute the unit vector of a 4D vector
 * @param {[number, number, number, number]} a
 * @returns {[number, number, number, number]}
 */
export function normalize4D(a) {
	let len = length4D(a);

	return [a[0] * len, a[1] * len, a[2] * len, a[3] * len];
}
