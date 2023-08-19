import { forwardRef } from "react";

export const UIContainer = forwardRef(({ elements, selectionHandler }, ref) => {
    return (
        <div className="flex flex-row w-[415px]" ref={ref}>
            {elements.map((element, index) => (
                <UIElement
                    key={index}
                    id={element.id}
                    color={element.color}
                    handler={selectionHandler}
                />
            ))}
        </div>
    );
});

UIContainer.displayName = "UIcont";

function UIElement({ id, color, handler }) {
    return (
        <div
            className="item flex-1"
            id={id}
            style={{ backgroundColor: color }}
            onClick={handler}
        ></div>
    );
}
