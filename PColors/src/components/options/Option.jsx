export function Option({ value }) {
    return (
        <li>
            <h1 className="text-7xl">{value}</h1>
            <hr className="border-none h-[6px] bg-black" />
        </li>
    );
}
