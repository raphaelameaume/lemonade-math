import { RAD2DEG } from './constants.js';
import { clamp } from './clamp.js';
import { map } from './map.js';

/**
 * Convert geocentric coordinates (x, y, z) to polar coordinates (latitude, longitude)
 * @param {Object} geocentricCoordinates
 * @param {number} geocentricCoordinates.x
 * @param {number} geocentricCoordinates.y
 * @param {number} geocentricCoordinates.z
 * @returns {Object} polarCoordinates
 * @returns {number} polarCoordinates.latitude - In degrees, in range [-90, 90]
 * @returns {number} polarCoordinates.longitude - In degrees, in range [-180, 180]
 */
export function geocentricToPolar({ x, y, z }) {
	let radius = Math.sqrt(x * x + y * y + z * z);
	let theta = 0;
	let phi = 0;

	if (radius !== 0) {
		theta = Math.atan2(x, z);
		phi = Math.acos(clamp(y / radius, -1, 1));
	}

	let longitude = theta * RAD2DEG - 90;

	if (longitude < -180) {
		longitude = 180 - (Math.abs(longitude) - 180);
	}

	let latitude = map(phi * RAD2DEG, 0, 180, 90, -90);

	return { latitude, longitude };
}
