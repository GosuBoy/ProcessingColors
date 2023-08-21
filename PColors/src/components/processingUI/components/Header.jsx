export function Header({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[40px] pl-[52px] flex"
            style={{ backgroundColor: "#333333" }}
            id="header"
            data-ctype="gradient"
        >
            <Tab />
            <TabDropDown />
        </div>
    );
}

function Tab() {
    return (
        <div
            className="rounded-tl-2xl w-36 h-full"
            style={{ backgroundColor: "#0e0e0e" }}
        >
            <TabBorder />
        </div>
    );
}

function TabBorder() {
    return (
        <div
            className="h-full w-1 ml-auto"
            style={{ backgroundColor: "#FFFFFF" }}
        ></div>
    );
}

function TabDropDown() {
    return (
        <div
            className="h-full w-9 ml-3 rounded-tr-2xl"
            style={{ backgroundColor: "#000000" }}
        />
    );
}
