/**
 * Compute the cross product of two 3D vectors
 * @param {[number, number, number]} a
 * @param {[number, number, number]} b
 * @returns {[number, number, number]}
 */
export function cross([ax, ay, az], [bx, by, bz]) {
	return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
}
