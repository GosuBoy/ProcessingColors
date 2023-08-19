import { useCallback, useEffect, useRef } from "react";

export function SVSelector({ H, S, V, setS, setV }) {
    const thumbRef = useRef(null);
    const bgrndRef = useRef(null);
    const boundRef = useRef({});

    const move_thumb = useCallback(
        (e) => {
            e.preventDefault();
            const dim = boundRef.current;
            let x = e.x - dim.lef;
            let y = e.y - dim.top;
            if (e.x > dim.rig) x = dim.W;
            if (e.x < dim.lef) x = 0;
            if (e.y > dim.bot) y = dim.H;
            if (e.y < dim.top) y = 0;
            setS(x / dim.W);
            setV(1 - y / dim.H);
        },
        [setS, setV]
    );

    const init_thumb_movement = useCallback(() => {
        document.addEventListener("mousemove", move_thumb);
        document.addEventListener(
            "mouseup",
            () => {
                document.removeEventListener("mousemove", move_thumb);
            },
            { once: true }
        );
    }, [move_thumb]);

    useEffect(() => {
        const Bounds = bgrndRef.current.getBoundingClientRect();

        boundRef.current = {
            W: Bounds.width,
            H: Bounds.height,
            top: Bounds.top,
            bot: Bounds.bottom,
            lef: Bounds.left,
            rig: Bounds.right,
        };
    }, []);

    useEffect(() => {
        bgrndRef.current.style.backgroundColor = `hsl(${H} 100% 50%)`;
    }, [H]);

    useEffect(() => {
        thumbRef.current.style.transform = `translate(${S * 415}px, ${
            308 * (1 - V)
        }px)`;
    }, [S, V]);
    /*
    function init_thumb_movement() {
        document.addEventListener("mousemove", move_thumb);
        document.addEventListener(
            "mouseup",
            () => {
                document.removeEventListener("mousemove", move_thumb);
            },
            { once: true }
        );
    }
    */
    /*
    function move_thumb(e) {
        
    }
    */
    return (
        <div id="test" onMouseDown={init_thumb_movement} ref={bgrndRef}>
            <div id="SB_SLIDER" ref={thumbRef} />
        </div>
    );
}
