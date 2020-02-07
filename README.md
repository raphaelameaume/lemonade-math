# lemonade-math
Math utility functions

### clamp(value, min, max)

### map(value, min, max, newMin, newMax)

### lerp(x, y, t)
Linear interpolation between two float/int values (x, y) for a given t
- `x`:
- `y`:
- `t`: A value in the range [0, 1]

### lerp2([x0, y0], [x1, y1], t)
Linear interpolation between two array of dimension 2 (x, y) for a given t

### lerp3([x0, y0], [x1, y1], t)
Linear interpolation between two array of dimension 3 (x, y) for a given t

### lerp4([x0, y0], [x1, y1], t)
Linear interpolation between two array of dimension 4 (x, y) for a given t

### [x, y, z] = polarToGeo(latitude, longitude, radius)
Return an array of 3D coordinates given a latitude, a longitude and radius
- `latitude`: A value between 0 and PI. Default to 0.
- `longitude`: A value between -PI and PI. Default to 0.
- `radius`: A value > 0. Default to 1.