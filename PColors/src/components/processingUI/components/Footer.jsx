export function Footer({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[50px] pl-[52px] pb-3 flex gap-1"
            style={{ backgroundColor: "#245425" }}
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
                className="w-24 h-full rounded-b-xl"
                style={{ backgroundColor: "rgb(255, 10, 10)" }}
                id="footer_tab_selected_color"
                data-ctype="gradient"
                data-state={true}
            ></div>
            <div
                className="w-24 h-full rounded-b-xl"
                style={{ backgroundColor: "rgb(255, 10, 10)" }}
                id="footer_tab_enabled_color"
                data-ctype="gradient"
                data-state={true}
            ></div>
        </>
    );
}
