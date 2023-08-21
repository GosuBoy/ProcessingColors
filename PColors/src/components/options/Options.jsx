import { save } from "../../scripts/save";
import { Option } from "./Option";

const options = ["RANDOM", "IMPORT", "SAVE", "COPY"];

export function Options() {
    return (
        <ul className="h-[554px] flex flex-col justify-between">
            {options.map((optn, idx) => (
                <Option key={idx} value={optn} />
            ))}
            <TempSaveButton />
        </ul>
    );
}

function TempSaveButton() {
    return <button onClick={save}>SAVE</button>;
}
