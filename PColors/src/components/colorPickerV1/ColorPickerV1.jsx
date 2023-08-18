import { useEffect, useRef, useState } from "react";
import { rgb2hsv } from "../utils/rgb2hsv";
import { hsv2rgb } from "../utils/hsv2rgb";

export function ColorPickerV1({ currentElement, currentColor }) {
    const [Hue, setHue] = useState(0); // [0 , 360]
    const [Sat, setSat] = useState(0); // [0 , 1]
    const [Bri, setBri] = useState(0); // [0 , 1]

    const [active, setActive] = useState(0);

    useEffect(() => {
        //console.log("currentElementChanged");
        console.log("newcolor", currentColor);
        if (currentColor) {
            const [r, g, b] = currentColor;
            const [h, s, v] = rgb2hsv(r / 255, g / 255, b / 255);

            setHue(h);
            setSat(s);
            setBri(v);

            setActive(true);
        }
        //console.log(currentElement.current);
    }, [currentColor]);

    if (active) {
        const [r, g, b] = hsv2rgb(Hue, Sat, Bri);
        currentElement.current.style.backgroundColor = `rgb( ${r * 255}, ${
            g * 255
        }, ${b * 255})`;
    }

    return (
        <div id="CPicker">
            <SatBriSelector
                H={Hue}
                S={Sat}
                B={Bri}
                setS={setSat}
                setB={setBri}
            />
            <HueSelector H={Hue} setH={setHue} />
            <ColorData H={Hue} S={Sat} V={Bri} />
        </div>
    );
}

function SatBriSelector({ H, S, B, setS, setB }) {
    const thumbRef = useRef(null);
    const gradtRef = useRef(null);
    const [dim, setDim] = useState({});

    useEffect(() => {
        const Bounds = gradtRef.current.getBoundingClientRect();

        setDim({
            W: Bounds.width,
            H: Bounds.height,
            top: Bounds.top,
            bot: Bounds.bottom,
            lef: Bounds.left,
            rig: Bounds.right,
        });
    }, []);

    useEffect(() => {
        gradtRef.current.style.backgroundColor = `hsl(${H} 100% 50%)`;
    }, [H]);

    useEffect(() => {
        thumbRef.current.style.transform = `translate(${S * 415}px, ${
            308 * (1 - B)
        }px)`;
    }, [S, B]);

    function move(e) {
        e.preventDefault();

        let x = e.x - dim.lef;
        let y = e.y - dim.top;

        if (e.x > dim.rig) x = dim.W; //WIDTH
        if (e.x < dim.lef) x = 0;
        if (e.y > dim.bot) y = dim.H; //HEIGHT
        if (e.y < dim.top) y = 0;

        setS(x / 415);
        setB(1 - y / 308);

        //thumbRef.current.style.transform = `translate(${x}px, ${y}px)`;
        //moveSliderThumb(sbSliderRef,x,y);
        //moveSliderThumb(sbRef,x,y);
    }

    function start_movement() {
        document.addEventListener("mousemove", move);
        document.addEventListener(
            "mouseup",
            () => {
                document.removeEventListener("mousemove", move);
            },
            { once: true }
        );
    }

    return (
        <div id="test" onMouseDown={start_movement} ref={gradtRef}>
            <div id="SB_SLIDER" ref={thumbRef} />
        </div>
    );
}

function HueSelector({ H, setH }) {
    return (
        <input
            type="range"
            min={0}
            max={360}
            value={H}
            onChange={(e) => {
                e.preventDefault();
                setH(e.target.value);
            }}
            id="HUE_SLIDER"
        />
    );
}

function ColorData({ H, S, V }) {
    return (
        <div className="font-semibold text-4xl">
            <h1>HUE: {H}</h1>
            <h1>SATURATION: {S}</h1>
            <h1>BRIGHTNESS: {V}</h1>
            -----------------------------
        </div>
    );
}
