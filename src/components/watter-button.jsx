export function WaterButton({ name, color, icon }) {
    return (
        <button
            type="button"
            className="relative rounded-lg px-6 py-2 font-semibold shadow-md flex items-center gap-2 transition hover:brightness-110"
            style={{
                backgroundColor: "transparent",
                color: color,
                border: `2px solid ${color}`,
                textShadow: `0 0 4px ${color}`,
            }}
            title={name}
        >
            {icon && <img src={icon} alt={name} className="inline-block w-6 h-6" />}
            {name}
        </button>
    );
}