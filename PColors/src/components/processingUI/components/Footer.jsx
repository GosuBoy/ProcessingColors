export function Footer({ handler }) {
    return (
        <div
            onClick={handler}
            className="w-full h-[50px]"
            style={{ backgroundColor: "#245425" }}
        ></div>
    );
}
