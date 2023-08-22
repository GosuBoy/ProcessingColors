export function Console({ handler }) {
    return (
        <div
            className="w-full h-[120px]"
            style={{ backgroundColor: "rgb(54, 3, 196)" }}
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
            className="w-full h-8"
            style={{ backgroundColor: "rgb(167, 151, 172)" }}
            id="status_notice_bgcolor"
            data-ctype="solid"
        ></div>
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
            className="w-7 h-full ml-auto"
            style={{ backgroundColor: "#FFFFFF" }}
            id="console_scrollbar_color"
            data-ctype="solid"
        ></div>
    );
}
