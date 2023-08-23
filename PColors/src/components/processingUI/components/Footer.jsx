import { ConsoleIcon } from "./Icons/ConsoleIcon";
import { ErrorsIcon } from "./Icons/ErrorsIcon";

export function Footer({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[50px] pl-[52px] pb-3 flex gap-1"
            style={{ backgroundColor: "#42464E" }}
            id="footer"
            data-ctype="gradient"
        >
            <Tabs />
        </div>
    );
}

function Tabs() {
    return (
        <>
            <div
                className=" h-full rounded-b-lg flex px-4 items-center"
                style={{ backgroundColor: "#6C7078" }}
                id="footer_tab_selected_color"
                data-ctype="gradient"
                data-state={true}
            >
                <ConsoleIcon />
                <span className="ml-2 text-white text-xs">Console</span>
            </div>
            <div
                className="h-full rounded-b-lg flex px-4 items-center"
                style={{ backgroundColor: "#6C7078" }}
                id="footer_tab_selected_color"
                data-ctype="gradient"
                data-state={true}
            >
                <ErrorsIcon />
                <span className="ml-2 text-white text-xs">Errors</span>
            </div>
        </>
    );
}
