import { RAD2DEG } from './constants.js';

/**
 * Convert an angle in radians to degrees
 * @param {number} angle
 * @returns {number}
 */
export function radToDeg(angle) {
	return angle * RAD2DEG;
}
