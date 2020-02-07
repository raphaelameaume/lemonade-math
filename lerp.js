export function lerp(x, y, t) {
    return (1 - t) * x * + t * y;
}

export function lerp2([x0, y0] = [], [x1, y1] = [], t) {
    return [
        lerp(x0, x1, t),
        lerp(y0, y1, t),
    ];
}

export function lerp3([x0, y0, z0] = [], [x1, y1, z0] = [], t) {
    return [
        lerp(x0, x1, t),
        lerp(y0, y1, t),
        lerp(z0, z1, t),
    ];
}

export function lerp4([x0, y0, z0, w0] = [], [x1, y1, z1, w1] = [], t) {
    return [
        lerp(x0, x1, t),
        lerp(y0, y1, t),
        lerp(z0, z1, t),
        lerp(w0, w1, t),
    ];
}