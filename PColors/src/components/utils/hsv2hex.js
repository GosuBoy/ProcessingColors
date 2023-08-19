import { hsv2rgb } from "./hsv2rgb";
import { rgbToHex } from "./rgb2hex";

export function hsv2hex(h, s, v) {
    const [r, g, b] = hsv2rgb(h, s, v);
    const HEX = rgbToHex(
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ).toUpperCase();
    return HEX;
}
