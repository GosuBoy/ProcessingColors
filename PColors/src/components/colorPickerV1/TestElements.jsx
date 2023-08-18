export function TestElements({ currentElement, setCurrentColor }) {
    function selectionHandler(e) {
        currentElement.current = e.target;
        const [R, G, B] = e.target.style.backgroundColor
            .split("(")[1]
            .split(")")[0]
            .split(",");
        //console.log(currentElement.current, R, G, B);
        setCurrentColor([R, G, B]);
    }

    return (
        <div className="flex flex-row w-[415px]">
            <div
                className="item flex-1"
                style={{ backgroundColor: "rgb(255, 0, 0)" }}
                id="0"
                onClick={selectionHandler}
            />
            <div
                className="item flex-1"
                style={{ backgroundColor: "rgb(20, 55, 150)" }}
                id="1"
                onClick={selectionHandler}
            />
            <div
                className="item flex-1"
                style={{ backgroundColor: "rgb(0, 0, 255)" }}
                id="2"
                onClick={selectionHandler}
            />
        </div>
    );
}
