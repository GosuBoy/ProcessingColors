/*
import { ColorPickerV1 } from "./components/colorPickerV1/ColorPickerV1";
import { TestElements } from "./components/colorPickerV1/TestElements";
*/
import { useRef, useState } from "react";
import { ColorPickerV2 } from "./components/colorPickerV2/ColorPickerV2";
import { TestElementsV2 } from "./components/colorPickerV2/TestElementsV2";
import { hsv2rgb } from "./components/utils/hsv2rgb";
import { UIContainer } from "./components/colorPickerV2/UIContainer";
import { rgb2hsv } from "./components/utils/rgb2hsv";
import { CPickerV3 } from "./components/colorPickerV3/CPickerV3";

const PUIelements = [
    {
        id: "console_output_color",
        color: "#ff2989",
    },
    {
        id: "console_scrollbar_color",
        color: "#525252",
    },
    {
        id: "console_scrollbar_thumb_enabled_color",
        color: "#4A5059",
    },
];

function App() {
    /*
    const [currentColor, setCurrentColor] = useState([0, 0, 0]);
    //const [elems, setElems] = useState([...PUIelements]);
    const selectedElement = useRef(null);
    const contRef = useRef(null);

    function doSomething(Hue, Sat, Val) {
        //console.log(Hue, Sat, Val);
        const [R, G, B] = hsv2rgb(Hue, Sat, Val);
        //console.log(selectedElement.current);
        if (selectedElement.current) {
            selectedElement.current.style.backgroundColor = `rgb( ${R * 255}, ${
                G * 255
            }, ${B * 255})`;
        }
    }

    function onSelection(e) {
        //console.log(e.target.style.backgroundColor);
        selectedElement.current = e.target;
        //console.log()
        //const color = e.target.style.backgroundColor;
        //setCurrentColor()
        const [R, G, B] = e.target.style.backgroundColor
            .split("(")[1]
            .split(")")[0]
            .split(",");

        const [H, S, V] = rgb2hsv(R / 255, G / 255, B / 255);

        setCurrentColor([H, S, V]);
    }

    function getNewColors(e) {
        const elements = Array.from(contRef.current.children);
        elements.forEach((e) => console.log(e.id, e.style.backgroundColor));
    }
    */
    return (
        <div className="ml-56">
            <h1 className="text-8xl font-bold">PCOLORS</h1>
            <CPickerV3 />
            {/*
            <ColorPickerV2 input={currentColor} output={doSomething} />
            <UIContainer
                elements={PUIelements}
                selectionHandler={onSelection}
                ref={contRef}
                cref={contRef}
            />
            <button className="bg-black text-zinc-100" onClick={getNewColors}>
                state
            </button>
            */}
            {/*
            <TestElementsV2
                onSelection={setCurrentColor}
                currentTarget={selectedElement}
            />
            */}
            {/*<ColorPickerV1
                  currentElement={currentElement}
                  currentColor={currentColor}
              />
              <TestElements
                  currentElement={currentElement}
                  setCurrentColor={setCurrentColor}
              />*/}
        </div>
    );
}

export default App;
