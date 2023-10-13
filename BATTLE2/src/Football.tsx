export const Hexagon = () => {
    return (
        <div
            className="w-[50px] h-[50px] bg-black"
            style={{
                animationName: "vibgyor",
                animationDuration: "3s",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationTimingFunction: "linear",
                clipPath:
                    "polygon(12px 100%, 0 50%, 12px 0, 40px 0, 100% 50%, 40px 100%)",
            }}
        ></div>
    );
};
export const FootBall = () => {
    return (
        <div
            className="w-[154px] h-[154px] rounded-full z-50 border-4  overflow-hidden grid"
            style={{
                animationName: "vibgyor-border",
                animationDuration: "3s",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationTimingFunction: "linear",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: "2px",
            }}
        >
            {Array(9)
                .fill(0)
                .map((_, i) => (
                    <Hexagon key={i} />
                ))}
        </div>
    );
};
