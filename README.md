# lemonade-math
Math utility functions

## Installation

```
npm install lemonade-math
```

## Usage

```js
import { lerp } from "lemonade-math";

console.log(lerp(0, 2, 0.5)); // 1

```

## Functions

### (Number) v = clamp(value, min, max)
Clamps a value between min and max (both inclusive).

### (Number) v = degToRad(value)
Convert `value` in degrees to radians.

### (Number) v = radToDeg(value)
Convert `value` in radians to degrees.

### (Number) v = fract(value)
Return the fractional part of value.

### (Number) v = map(value, min, max, newMin, newMax)
Map value from one range [min, max] to an other [newMin, newMax].

### (Number) v = lerp(x, y, t)
Linear interpolation between two numbers (x, y) for a given t in range [0, 1].

### (Array) [x, y] = lerp2([x0, y0], [x1, y1], t)
Linear interpolation between two arrays of dimension 2 [x, y] for a given t in range [0, 1].

### (Array) [x, y, z] = lerp3([x0, y0, z0], [x1, y1, z1], t)
Linear interpolation between two arrays of dimension 3 [x, y, z] for a given t in range [0, 1].

### (Array) [x, y, z, w] = lerp4([x0, y0, z0, w0], [x1, y1, z1, w1], t)
Linear interpolation between two arrays of dimension 4 [x, y, z, w] for a given t in range [0, 1].

### (Array) [x, y, z] = polarToGeo(latitude, longitude, radius)
Return an array of 3D coordinates given a latitude, a longitude and radius
- `latitude`: A number between 0 and PI. Default to 0.
- `longitude`: A number between -PI and PI. Default to 0.
- `radius`: A number > 0. Default to 1.

## License

MIT License, see [LICENSE](https://github.com/raphaelameaume/lemonade-helpers/tree/master/LICENSE) for details