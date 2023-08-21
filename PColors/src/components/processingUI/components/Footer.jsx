export function Footer({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[50px] pl-[52px] pb-3 flex gap-1"
            style={{ backgroundColor: "#245425" }}
            id="footer"
            data-ctype="gradient"
        >
            <Tab />
            <Tab />
        </div>
    );
}

function Tab() {
    return (
        <div
            className="w-24 h-full rounded-b-xl"
            style={{ backgroundColor: "rgb(255, 10, 10)" }}
        ></div>
    );
}
