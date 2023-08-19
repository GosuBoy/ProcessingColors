export function HSelector({ H, setH }) {
    return (
        <input
            type="range"
            min={0}
            max={360}
            value={H}
            onChange={(e) => {
                e.preventDefault();
                setH(e.target.value);
            }}
            id="HUE_SLIDER"
        />
    );
}
