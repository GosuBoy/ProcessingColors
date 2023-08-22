import { save } from "../../scripts/save";

export function Options() {
    return (
        <ul className="h-[554px] flex flex-col justify-between text-white text-6xl">
            <li>
                <button>RANDOMIZE</button>
                <hr className="border-none h-[6px] bg-white" />
            </li>
            <li>
                <button>IMPORT</button>
                <hr className="border-none h-[6px] bg-white" />
            </li>
            <li>
                <TempSaveButton />
                <hr className="border-none h-[6px] bg-white" />
            </li>
            <li>
                <button>COPY</button>
                <hr className="border-none h-[6px] bg-white" />
            </li>
        </ul>
    );
}

function TempSaveButton() {
    return <button onClick={save}>SAVE</button>;
}
