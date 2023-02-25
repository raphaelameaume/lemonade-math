import { DEG2RAD } from './constants.js';

/**
 * Convert polar coordinates (latitude, longitude) to geocentric coordinates (x,y,z)
 * @param {Object} options
 * @param {number} options.latitude - In degrees, in range [-90, 90]
 * @param {number} options.longitude - In degrees, in range [-180, 180]
 * @param {number} [options.radius=1]
 * @returns {Object} geocentricCoordinates
 * @returns {number} geocentricCoordinates.x
 * @returns {number} geocentricCoordinates.y
 * @returns {number} geocentricCoordinates.z
 */
export function polarToGeocentric({ latitude, longitude, radius = 1 }) {
	const phi = (90 - latitude) * DEG2RAD;
	const theta = (longitude + 180) * DEG2RAD;

	const x = -(radius * Math.sin(phi) * Math.cos(theta));
	const z = radius * Math.sin(phi) * Math.sin(theta);
	const y = radius * Math.cos(phi);

	return { x, y, z };
}
