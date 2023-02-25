/**
 * Compute the square of the Euclidian length of a vector
 * @param {[number, number]|[number, number, number]|[number, number, number, number]} a
 * @returns {number}
 */
export function squaredLength(a) {
	if (a.length === 2) return squaredLength2D(a);
	if (a.length === 3) return squaredLength3D(a);
	if (a.length === 4) return squaredLength4D(a);
}

/**
 * Compute the square of the Euclidian length of a 2D vector
 * @param {[number, number]} a
 * @returns {number}
 */
export function squaredLength2D([x, y]) {
	return x * x + y * y;
}

/**
 * Compute the square of the Euclidian length of a 3D vector
 * @param {[number, number, number]} a
 * @returns {number}
 */
export function squaredLength3D([x, y, z]) {
	return x * x + y * y + z * z;
}

/**
 * Compute the square of the Euclidian length of a 4D vector
 * @param {[number, number, number, number]} a
 * @returns {number}
 */
export function squaredLength4D([x, y, z, w]) {
	return x * x + y * y + z * z + w * w;
}

/**
 * Compute the Euclidian length of a vector
 * @param {[number, number]|[number, number, number]|[number, number, number, number]} a
 * @returns {number}
 */
export function length(a) {
	if (a.length === 2) return length2D(a);
	if (a.length === 3) return length3D(a);
	if (a.length === 4) return length4D(a);
}

/**
 * Compute the Euclidian length of a 2D vector
 * @param {[number, number]} a
 * @returns {number}
 */
export function length2D(a) {
	return Math.sqrt(squaredLength2D(a));
}

/**
 * Compute the Euclidian length of a 3D vector
 * @param {[number, number, number]} a
 * @returns {number}
 */
export function length3D(a) {
	return Math.sqrt(squaredLength3D(a));
}

/**
 * Compute the Euclidian length of a 4D vector
 * @param {[number, number, number, number]} a
 * @returns {number}
 */
export function length4D(a) {
	return Math.sqrt(squaredLength4D(a));
}
