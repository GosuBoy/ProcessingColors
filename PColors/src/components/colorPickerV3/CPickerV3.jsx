import { useEffect, useState } from "react";
import { HSelector } from "./HSelector";
import { CData } from "./CData";
import { SVSelector } from "./SVSelector";

export function CPickerV3({ input, output }) {
    const [Hue, setHue] = useState(0); // [0 , 360]
    const [Sat, setSat] = useState(0); // [0 , 1]
    const [Val, setVal] = useState(0); // [0 , 1]
    useEffect(() => {
        if (output) output(Hue, Sat, Val);
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
        <div id="CPicker" className="flex flex-col gap-5 w-[415px]">
            <SVSelector H={Hue} S={Sat} V={Val} setS={setSat} setV={setVal} />
            <HSelector H={Hue} setH={setHue} />
            <CData H={Hue} S={Sat} V={Val} />
        </div>
    );
}
