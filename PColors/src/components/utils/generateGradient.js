import { hsv2rgb } from "./hsv2rgb";
import { map_range } from "./mapRage";

export function generateGradient(hue, ctx) {
    const pixels = ctx.createImageData(415, 308);

    const data = pixels.data;

    for (let i = 0; i < 415; i++) {
        for (let j = 0; j < 308; j++) {
            const index = (i + j * 415) * 4;

            const sat = map_range(i, 0, 415, 0, 1);
            const bri = map_range(j, 0, 308, 1, 0);

            const [R, G, B] = hsv2rgb(hue, sat, bri);

            data[index] = R * 255;
            data[index + 1] = G * 255;
            data[index + 2] = B * 255;
            data[index + 3] = 255;
        }
    }

    ctx.putImageData(pixels, 0, 0);
}
