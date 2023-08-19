export function HSelector({ H, setH }) {
    return (
        <div className="flex flex-col w-[415px] h-[62px] justify-between">
            <hr className="border-none h-[6px] bg-black" />
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
        </div>
    );
}
