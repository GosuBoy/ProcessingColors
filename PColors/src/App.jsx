import { useRef, useState } from "react";
import { ColorPickerTest } from "./components/ColorPicker_Test";
import { ContainersTest } from "./components/ContainersTest";
import { ColorPickerV1 } from "./components/colorPickerV1/ColorPickerV1";
import { TestElements } from "./components/colorPickerV1/TestElements";

function App() {
    /*
    const [currentColor, setCurrentColor] = useState([0, 0, 0]);

    const colorRef = useRef(null);
    const itemsRef = useRef(null);

    function getColor(R, G, B) {
        setCurrentColor([R, G, B]);
        colorRef.current.setRGB(R, G, B);
        console.log(colorRef.current.getRGB());
        //console.log(colorRef.current);
    }
    */

    const currentElement = useRef(null);
    const [currentColor, setCurrentColor] = useState(null);

    return (
        <div className="ml-56">
            <h1 className="text-8xl font-bold">PCOLORS</h1>
            <ColorPickerV1
                currentElement={currentElement}
                currentColor={currentColor}
            />
            <TestElements
                currentElement={currentElement}
                setCurrentColor={setCurrentColor}
            />
            {/*<ColorPicker></ColorPicker>*/}
            {/*
            <ColorPickerTest
              currentColor={currentColor}
              ref={colorRef}
              itemsRef={itemsRef}
              />
            <ContainersTest 
              getColor={getColor}
              ref={itemsRef}
            />
          */}
        </div>
    );
}

export default App;
