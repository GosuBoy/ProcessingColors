export function Editor({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[282px] flex"
            style={{ backgroundColor: "#000000" }}
        >
            <Inner />
        </div>
    );
}

function Inner() {
    return (
        <div
            className="flex-grow mb-4 mr-4 flex"
            style={{ backgroundColor: "rgb(119, 119, 119)" }}
        >
            <Gutter />
            <TextArea />
        </div>
    );
}

function TextArea() {
    return (
        <div
            className="w-full h-full"
            style={{ backgroundColor: "rgb(153, 71, 71)" }}
        >
            <TextHighlight />
        </div>
    );
}

function Gutter() {
    return (
        <div
            className="w-[52px] h-full"
            style={{ backgroundColor: "rgb(110, 0, 0)" }}
        >
            <GutterHighlight />
        </div>
    );
}

function GutterHighlight() {
    return (
        <div
            className="w-full h-5"
            style={{ backgroundColor: "rgb(87, 121, 201)" }}
        ></div>
    );
}

function TextHighlight() {
    return (
        <div
            className="w-full h-5"
            style={{ backgroundColor: "rgb(128, 248, 180)" }}
        ></div>
    );
}
