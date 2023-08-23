import { DebugIcon } from "../Icons/DebugIcon";
import { PlayIcon } from "../Icons/PlayIcon";
import { StopIcon } from "../Icons/StopIcon";
import { TabMenuIcon } from "../Icons/TabMenuIcon";

export function Toolbar({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[83px] flex pl-[52px] pr-4 content-center flex-wrap gap-3"
            style={{ backgroundColor: "#242528" }}
            id="toolbar"
            data-ctype="gradient"
        >
            <PlayButton />
            <StopButton />
            <div className="flex  ml-auto gap-3 items-center">
                <DebugButton />
                <ModeButton />
            </div>
        </div>
    );
}

function PlayButton() {
    return (
        <div
            className="w-[52px] h-[52px] rounded-full flex justify-center content-center flex-wrap"
            style={{ backgroundColor: "#757575" }}
        >
            <PlayIcon />
        </div>
    );
}

function StopButton() {
    return (
        <div
            className="w-[52px] h-[52px] rounded-full flex justify-center content-center flex-wrap"
            style={{ backgroundColor: "#757575" }}
        >
            <StopIcon />
        </div>
    );
}

function DebugButton() {
    return (
        <div
            className="w-[52px] h-[52px] rounded-full flex justify-center content-center flex-wrap"
            style={{ backgroundColor: "#757575" }}
        >
            <DebugIcon />
        </div>
    );
}

function ModeButton() {
    return (
        <div
            className="h-[38px] px-3
            rounded-md flex justify-center items-center content-center flex-wrap
            border-2 text-gray-400 border-gray-400 text-xs"
        >
            <span className="mr-2">Java</span>
            <TabMenuIcon />
        </div>
    );
}
