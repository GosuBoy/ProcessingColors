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
            className="w-[52px] h-[52px] rounded-full flex justify-center content-center flex-wrap"
            style={{ backgroundColor: "#ff7979" }}
        >
            <PlayIComponent />
        </div>
    );
}

function StopButton() {
    return (
        <div
            className="w-[52px] h-[52px] rounded-full flex justify-center content-center flex-wrap"
            style={{ backgroundColor: "#ff7979" }}
        >
            <StopIComponent />
        </div>
    );
}

function PlayIComponent() {
    return (
        <svg
            className="icon pointer-events-none mr-4 ml-5"
            viewBox="0 0 152 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="pointer-events-auto"
                d="M151.513 76.5626L0.0875244 152.275V0.850098L151.513 76.5626Z"
                style={{ fill: "#FFFFFF" }}
                data-icon={true}
            />
        </svg>
    );
}

function StopIComponent() {
    return (
        <svg
            className="icon pointer-events-none mx-[19px]"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="pointer-events-auto"
                d="M15.7992 0.549072V16.4491H0.199219V0.549072H15.7992Z"
                style={{ fill: "#FFFFFF" }}
                data-icon={true}
            />
        </svg>
    );
}
