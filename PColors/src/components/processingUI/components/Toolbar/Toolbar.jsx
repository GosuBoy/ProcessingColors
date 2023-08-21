export function Toolbar({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[83px] flex pl-[52px] content-center flex-wrap gap-3"
            style={{ backgroundColor: "#4643ff" }}
        >
            <PlayButton />
            <StopButton />
        </div>
    );
}

function PlayButton() {
    return (
        <div
            className="w-[52px] h-[52px] rounded-full"
            style={{ backgroundColor: "#ff7979" }}
        ></div>
    );
}

function StopButton() {
    return (
        <div
            className="w-[52px] h-[52px] rounded-full"
            style={{ backgroundColor: "#ff7979" }}
        ></div>
    );
}
