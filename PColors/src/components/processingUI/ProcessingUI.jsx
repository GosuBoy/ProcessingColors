import { Console } from "./components/Console";
import { Editor } from "./components/Editor";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Toolbar } from "./components/Toolbar/Toolbar";

export function ProcessingUI({ selector }) {
    return (
        <div className="w-[850px]">
            <Toolbar handler={selector} />
            <Header handler={selector} />
            <Editor handler={selector} />
            <Console handler={selector} />
            <Footer handler={selector} />
        </div>
    );
}
