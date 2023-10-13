export const Header = () => {
    return (
        <div
            id="gradient-header"
            style={{
                zIndex: -10,
                width: "500px",
                height: "600px",
                overflow: "hidden",
                transform: "skewY(-12deg)",
                transformOrigin: 0,
                position: "absolute",
                background:
                    "linear-gradient(150deg, hsl(164, 100%, 35%) 15%,hsl(164, 100%, 30%) 70%,hsl(164, 100%, 25%) 94%)",
            }}
        >
            {Array(5)
                .fill(0)
                .map((_, i) => (
                    <span key={i}></span>
                ))}
        </div>
    );
};
