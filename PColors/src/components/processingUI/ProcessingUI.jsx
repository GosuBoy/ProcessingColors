export function ProcessingUI({ data = [{ id: "", color: "" }] }) {
    return (
        <div className="w-[850px]">
            {data.map((e) => (
                <PUIelement key={e.id} id={e.id} color={e.color} />
            ))}
        </div>
    );
}

function PUIelement({ id, color }) {
    return <div id={id} style={{ backgroundColor: color }}></div>;
}
