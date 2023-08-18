export function rgbToHex(r, g, b) {
    function c(v) {
        var hex = v.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    return "#" + c(r) + c(g) + c(b);
}
