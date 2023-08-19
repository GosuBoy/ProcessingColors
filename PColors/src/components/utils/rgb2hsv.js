// input: r,g,b in [0,1], out: h in [0,360) and s,v in [0,1]
export function rgb2hsv(r, g, b) {
    let v = Math.max(r, g, b),
        c = v - Math.min(r, g, b);
    let h =
        c &&
        (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);
    return [60 * (h < 0 ? h + 6 : h), v && c / v, v];
}
