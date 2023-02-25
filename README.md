# lemonade-math

Math utility functions

## Installation

```
npm install lemonade-math
```

### Usage

```js
import { lerp } from 'lemonade-math';

console.log(lerp(0, 2, 0.5)); // 1
```

## Constants

#### `PI`

#### `TAU`

#### `HALF_PI`

#### `RAD2DEG`

#### `DEG2RAD`

## Functions

#### `clamp`

-   Type: `(value: number, min:number, max:number) => number`

Constrain a value to lie between two further values

#### `cross`

-   Type: `(a: number[3], b: number[3]) => number[3]`

Compute the cross product of two 3D vectors

#### `degToRad`

-   Type: `(angle: number) => number`

Convert an angle in degrees to radians

#### `distance`

-   Type: `(a: number[2|3], b: number[2|3]) => number`

Compute the Euclidian distance between two vectors

#### `distance2D`

-   Type: `(a: number[2], b: number[2]) => number`

Compute the Euclidian distance between two 2D vectors

#### `distance3D`

-   Type: `(a: number[3], b: number[3]) => number`

Compute the Euclidian distance between two 3D vectors

#### `squaredDistance`

-   Type: `(a: number[2|3], b: number[2|3]) => number`

Compute the square of the Euclidian distance between two vectors

#### `squaredDistance2D`

-   Type: `(a: number[2], b: number[2]) => number`

Compute the square of the Euclidian distance between two 2D vectors

#### `squaredDistance3D`

-   Type: `(a: number[3], b: number[3]) => number`

Compute the square of the Euclidian distance between two 3D vectors

#### `fract`

-   Type: `(value: number) => number`

Compute the fractional part of a value

#### `geocentricToPolar`

-   Type: `({ x: number, y: number, z: number }) => { latitude: number, longitude: number }`

Convert geocentric coordinates (x, y, z) to polar coordinates (latitude, longitude)

#### `length`

-   Type: `(a: number[2|3|4], b: number[2|3|4]) => number`

Compute the Euclidian length between two vectors

#### `length2D`

-   Type: `(a: number[2], b: number[2]) => number`

Compute the Euclidian length between two 2D vectors

#### `length3D`

-   Type: `(a: number[3], b: number[3]) => number`

Compute the Euclidian length between two 3D vectors

#### `length4D`

-   Type: `(a: number[4], b: number[4]) => number`

Compute the Euclidian length between two 4D vectors

#### `squaredLength`

-   Type: `(a: number[2|3|4], b: number[2|3|4]) => number`

Compute the square of the Euclidian length between two vectors

#### `squaredLength2D`

-   Type: `(a: number[2], b: number[2]) => number`

Compute the square of the Euclidian length between two 2D vectors

#### `squaredLength3D`

-   Type: `(a: number[3], b: number[3]) => number`

Compute the square of the Euclidian length between two 3D vectors

#### `squaredLength4D`

-   Type: `(a: number[4], b: number[4]) => number`

Compute the square of the Euclidian length between two 4D vectors

#### `lerp`

-   Type: `(a: number, b: number) => number`

Linearly interpolate between two values

#### `lerp2D`

-   Type: `(a: number[2], b: number[2]) => number[2]`

Linearly interpolate between two 2D vectors

#### `lerp3D`

-   Type: `(a: number[3], b: number[3]) => number[3]`

Linearly interpolate between two 3D vectors

#### `lerp4D`

-   Type: `(a: number[4], b: number[4]) => number[4]`

Linearly interpolate between two 4D vectors

#### `map`

-   Type: `(value: number, min: number, max: number, nmin: number, nmax: number) => number`

Convert a number from one range to an other

#### `normal`

-   Type: `(a: number[2], b: number[2], direction?: number) => number[2]`

Compute the normal between two 2D vectors

#### `normalize`

-   Type: `(a: number[2|3|4], b: number[2|3|4]) => number[2|3|4]`

Compute the unit vector of a vector

#### `normalize2D`

-   Type: `(a: number[2], b: number[2]) => number[2]`

Compute the unit vector of a 2D vector

#### `normalize3D`

-   Type: `(a: number[3], b: number[3]) => number[3]`

Compute the unit vector of a 3D vector

#### `normalize4D`

-   Type: `(a: number[4], b: number[4]) => number[4]`

Compute the unit vector of a 4D vector

#### `polarToGeocentric`

-   Type: `({ latitude: number, longitude: number }) => { x: number, y: number, z: number }`

Convert polar coordinates (latitude, longitude) to geocentric coordinates (x,y,z)

#### `radToDeg`

-   Type: `(angle: number) => number`

Convert an angle in radians to degrees

## License

MIT License, see [LICENSE](https://github.com/raphaelameaume/lemonade-helpers/tree/master/LICENSE) for details
