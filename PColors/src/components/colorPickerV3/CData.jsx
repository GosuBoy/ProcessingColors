import { hsv2hex } from "../utils/hsv2hex";

export function CData({ H, S, V }) {
    return (
        <div className="flex flex-col w-[415px] mt-[82px] h-[62px] justify-between">
            <div className="font-semibold text-4xl flex w-[415px] justify-between">
                <h1>HEX</h1> {hsv2hex(H, S, V)}
            </div>
            <hr className="border-none h-[6px] bg-black" />
        </div>
    );
}
