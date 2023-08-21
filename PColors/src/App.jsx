import { useRef, useState } from "react";
import { CPickerV3 } from "./components/colorPickerV3/CPickerV3";
import { Options } from "./components/options/Options";
import { ProcessingUI } from "./components/processingUI/ProcessingUI";
import { rgb2hsv } from "./components/utils/rgb2hsv";
import { hsv2rgb } from "./components/utils/hsv2rgb";

function App() {
    const [CColor, setCColor] = useState([0, 0, 0]);
    const CElement = useRef(null);

    function CPickerOutput(h, s, v) {
        if (CElement.current) {
            const [r, g, b] = hsv2rgb(h, s, v);
            CElement.current.style.backgroundColor = `rgb(${r * 255}, ${
                g * 255
            }, ${b * 255})`;
        }
    }

    function PickColor(e) {
        CElement.current = e.target;
        const [r, g, b] = e.target.style.backgroundColor
            .split("(")[1]
            .split(")")[0]
            .split(",");

        const [h, s, v] = rgb2hsv(r / 255, g / 255, b / 255);
        setCColor([h, s, v]);
    }

    return (
        <>
            <header className="w-full h-20 bg-black mb-28"></header>
            <main className="mx-[50px] flex gap-[110px]">
                <Options />
                <ProcessingUI selector={PickColor} />
                <CPickerV3 input={CColor} output={CPickerOutput} />
            </main>
        </>
    );
}

export default App;
