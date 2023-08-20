import { CPickerV3 } from "./components/colorPickerV3/CPickerV3";
import { Options } from "./components/options/Options";

function App() {
    return (
        <>
            <h1 className="text-8xl font-bold">ProcessingColors </h1>
            <div className="mx-[50px] flex">
                <Options />
                <CPickerV3 />
            </div>
        </>
    );
}

export default App;
