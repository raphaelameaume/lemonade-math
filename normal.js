import { normalize2D } from './normalize.js';

/**
 * Compute the normal between two 2D vectors
 * @param {[number, number]} a
 * @param {[number, number]} b
 * @param {number} direction
 * @returns {[number, number]}
 */
export function normal([ax, ay], [bx, by], direction = 1) {
	const dx = bx - ax;
	const dy = by - ay;

	return direction > 0 ? normalize2D([-dy, dx]) : normalize2D([dy, -dx]);
}
