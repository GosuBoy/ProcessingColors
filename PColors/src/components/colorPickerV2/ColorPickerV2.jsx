import { forwardRef, useEffect, useState } from "react";
import { CData } from "./CData";
import { HSelector } from "./HSelector";
import { SVSelector } from "./SVSelector";

// H S V
//export const ColorPickerV2 = forwardRef((props, ref) => {
// input is an array of HSV values [ H , S , V ];

// output is a callback function

export function ColorPickerV2({ input, output }) {
    const [Hue, setHue] = useState(0); // [0 , 360]
    const [Sat, setSat] = useState(0); // [0 , 1]
    const [Val, setVal] = useState(0); // [0 , 1]

    useEffect(() => {
        output(Hue, Sat, Val);
    }, [Hue, Sat, Val]);

    useEffect(() => {
        if (input) {
            const [H, S, V] = input;
            setHue(H);
            setSat(S);
            setVal(V);
        }
    }, [input]);

    return (
        <div id="CPicker">
            <SVSelector H={Hue} S={Sat} V={Val} setS={setSat} setV={setVal} />
            <HSelector H={Hue} setH={setHue} />
            <CData H={Hue} S={Sat} V={Val} />
        </div>
    );
}
//});

//ColorPickerV2.displayName = "CPicker2.0";
