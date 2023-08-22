export function Editor({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[282px] flex"
            style={{ backgroundColor: "#000000" }}
            id="editor"
            data-ctype="gradient"
        >
            <Gutter />
            <Inner />
        </div>
    );
}

function Inner() {
    return (
        <div
            className="flex-grow mr-4 flex pb-4 pr-4"
            style={{ backgroundColor: "rgb(119, 119, 119)" }}
            id="editor_scrollbar_color"
            data-ctype="solid"
        >
            <TextArea />
        </div>
    );
}

function TextArea() {
    return (
        <div
            className="w-full h-full"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
            id="editor_bgcolor"
            data-ctype="solid"
        >
            <TextHighlight />
        </div>
    );
}

function Gutter() {
    return (
        <div
            className="w-[52px] h-full pointer-events-none"
            style={{ backgroundColor: "rgb(0, 0, 0, 0)" }}
        >
            <GutterHighlight />
        </div>
    );
}

function GutterHighlight() {
    return (
        <div
            className="w-full h-5 pointer-events-auto"
            style={{ backgroundColor: "rgb(87, 121, 201)" }}
            id="editor_gutter_highlight_color"
            data-ctype="solid"
        ></div>
    );
}

function TextHighlight() {
    return (
        <div
            className="w-full h-5"
            style={{ backgroundColor: "rgb(128, 248, 180)" }}
            id="editor_line_highlight_color"
            data-ctype="solid"
        ></div>
    );
}
