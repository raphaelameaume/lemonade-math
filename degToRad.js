import { DEG2RAD } from './constants.js';

/**
 * Convert an angle in degrees to radians
 * @param {number} angle
 * @returns {number}
 */
export function degToRad(angle) {
	return angle * DEG2RAD;
}
