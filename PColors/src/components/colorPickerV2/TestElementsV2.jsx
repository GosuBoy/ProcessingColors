import { rgb2hsv } from "../utils/rgb2hsv";

export function TestElementsV2({ onSelection, currentTarget }) {
    function selectionHandler(e) {
        const [R, G, B] = e.target.style.backgroundColor
            .split("(")[1]
            .split(")")[0]
            .split(",")
            .map((e) => e / 255);
        const [H, S, V] = rgb2hsv(R, G, B);
        //console.log("HSV COLOR:", H, S, V);
        onSelection([H, S, V]);
        currentTarget.current = e.target;
    }
    return (
        <div className="flex flex-row w-[415px]">
            <div
                className="item flex-1"
                style={{ backgroundColor: "rgb(255, 0, 0)" }}
                id="0"
                onClick={selectionHandler}
            />
            <div
                className="item flex-1"
                style={{ backgroundColor: "rgb(20, 55, 150)" }}
                id="1"
                onClick={selectionHandler}
            />
            <div
                className="item flex-1"
                style={{ backgroundColor: "rgb(0, 0, 255)" }}
                id="2"
                onClick={selectionHandler}
            />
        </div>
    );
}
