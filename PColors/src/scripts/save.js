import { rgbToHex } from "../components/utils/rgb2hex";
import { ui_color_data_gradients } from "./data/color_gradients";
import { ui_color_data_solid } from "./data/color_solid";
import { non_used_data } from "./data/non_used_data";

export async function save() {
    const space = "\r\n";

    ui_color_data_gradients.forEach((e) => {
        const DOM_e = document.getElementById(e.id);

        if (DOM_e) {
            console.log(DOM_e.dataset.ctype); //IMPORTANT?

            const [r, g, b] = DOM_e.style.backgroundColor
                .split("(")[1]
                .split(")")[0]
                .split(",");

            const hex = rgbToHex(Number(r), Number(g), Number(b)).toUpperCase();

            e.pcolorB[1] = hex;
            e.pcolorT[1] = hex;

            if (e.extra) e.extra[1] = hex;
        }
    });

    let color_data_gradients = "";

    ui_color_data_gradients.forEach((e) => {
        color_data_gradients +=
            e.pcolorB.join("=") +
            space +
            e.pcolorT.join("=") +
            space +
            (e.extra ? e.extra.join("=") + space : "");
    });

    //console.log(color_data_gradients);
    ui_color_data_solid.forEach((e) => {
        const DOM_e = document.getElementById(e.id);

        if (DOM_e) {
            console.log(DOM_e.dataset.ctype); //IMPORTANT?

            const [r, g, b] = DOM_e.style.backgroundColor
                .split("(")[1]
                .split(")")[0]
                .split(",");

            const hex = rgbToHex(Number(r), Number(g), Number(b)).toUpperCase();

            e.pcolor[1] = hex;

            if (e.extra) e.extra[1] = hex;
        }
    });

    let color_data_solids = "";
    ui_color_data_solid.forEach((e) => {
        color_data_solids += e.pcolor.join("=") + space;
    });

    //console.log(color_data_solids);

    //console.log(non_used_data);

    const modifiedData =
        color_data_gradients + color_data_solids + non_used_data;

    console.log(modifiedData);

    const blob = new Blob([modifiedData], { type: "text/plain" });

    try {
        const handle = await window.showSaveFilePicker({
            suggestedName: "theme",
            types: [
                {
                    description: "Text file",
                    accept: { "text/plain": [".txt"] },
                },
            ],
        });

        const writable = await handle.createWritable();

        await writable.write(blob);
        await writable.close();
        return;
    } catch (err) {
        if (err.name !== "AbortError") {
            console.error(err.name, err.message);
            return;
        }
    }
}
