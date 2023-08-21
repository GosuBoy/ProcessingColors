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
        ></div>
    );
}

function ConsoleText() {
    return (
        <div
            className="h-[120px] w-full"
            style={{ backgroundColor: "#000000" }}
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
        ></div>
    );
}
