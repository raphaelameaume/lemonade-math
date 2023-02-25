/**
 * Linearly interpolate between two values
 * @param {number} x - Specify the start of the range in which to interpolate
 * @param {number} y - Specify the end of the range in which to interpolate.
 * @param {number} t - Specify the value to use to interpolate between x and y
 * @returns {number}
 */
export function lerp(x, y, t) {
	return (1 - t) * x + t * y;
}

/**
 * Linearly interpolate between two 2D vectors
 * @param {[number, number]} a
 * @param {[number, number]} b
 * @param {number} t
 * @returns {[number, number]}
 */
export function lerp2D([ax, ay], [bx, by], t) {
	return [lerp(ax, bx, t), lerp(ay, by, t)];
}

/**
 * Linearly interpolate between two 3D vectors
 * @param {[number, number, number]} a
 * @param {[number, number, number]} b
 * @param {number} t
 * @returns {[number, number, number]}
 */
export function lerp3D([ax, ay, az], [bx, by, bz], t) {
	return [lerp(ax, bx, t), lerp(ay, by, t), lerp(az, bz, t)];
}

/**
 * Linearly interpolate between two 4D vectors
 * @param {[number, number, number, number]} a
 * @param {[number, number, number, number]} b
 * @param {number} t
 * @returns {[number, number, number, number]}
 */
export function lerp4D([ax, ay, az, aw], [bx, by, bz, bw], t) {
	return [lerp(ax, bx, t), lerp(ay, by, t), lerp(az, bz, t), lerp(aw, bw, t)];
}
