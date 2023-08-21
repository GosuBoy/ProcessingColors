export function Console({ handler }) {
    return (
        <div
            className="w-full h-[120px]"
            style={{ backgroundColor: "rgb(54, 3, 196)" }}
            onClick={handler}
        >
            <Header />
        </div>
    );
}

function Header() {
    return (
        <div
            className="w-full h-8"
            style={{ backgroundColor: "rgb(167, 151, 172)" }}
        ></div>
    );
}
