import { ClipboardIcon } from "./Icons/ClipboardIcon";
import { CollapseIcon } from "./Icons/CollapseIcon";

export function Console({ handler }) {
    return (
        <div
            className="w-full h-[120px]"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
            onClick={handler}
        >
            <Header />
            <ConsoleText />
        </div>
    );
}

function Header() {
    return (
        <div
            className="w-full h-8 flex flex-row-reverse px-2 gap-3"
            style={{ backgroundColor: "#747983" }}
            id="status_notice_bgcolor"
            data-ctype="solid"
        >
            <CollapseIcon />
            <ClipboardIcon />
        </div>
    );
}

function ConsoleText() {
    return (
        <div
            className="h-[120px] w-full"
            style={{ backgroundColor: "#000000" }}
            id="console_color"
            data-ctype="solid"
        >
            <ConsoleScroll />
        </div>
    );
}

function ConsoleScroll() {
    return (
        <div
            className="w-6 h-full ml-auto"
            style={{ backgroundColor: "#151B23" }}
            id="console_scrollbar_color"
            data-ctype="solid"
        ></div>
    );
}
