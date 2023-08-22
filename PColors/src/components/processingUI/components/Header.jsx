export function Header({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[40px] pl-[52px] flex"
            style={{ backgroundColor: "#242528" }}
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
            style={{ backgroundColor: "#090B0E" }}
            id="header_tab_selected_color"
            data-ctype="solid"
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
            id="header_tab_modified_color"
            data-ctype="solid"
        ></div>
    );
}

function TabDropDown() {
    return (
        <div
            className="h-full w-9 ml-3 rounded-tr-2xl"
            style={{ backgroundColor: "#0a0a0a" }}
            id="header_tab_unselected_color"
            data-ctype="solid"
        />
    );
}
