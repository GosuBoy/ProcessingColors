import { TabMenuIcon } from "./Icons/TabMenuIcon";

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
            className="rounded-tl-xl h-full flex text-gray-400 text-sm items-center pl-3 gap-3"
            style={{ backgroundColor: "#090B0E" }}
            id="header_tab_selected_color"
            data-ctype="solid"
        >
            <span>sketch 230823a</span>
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
            className="h-full w-7 ml-1 rounded-tr-xl flex items-center justify-center"
            style={{ backgroundColor: "#0a0a0a" }}
            id="header_tab_unselected_color"
            data-ctype="solid"
        >
            <TabMenuIcon />
        </div>
    );
}
