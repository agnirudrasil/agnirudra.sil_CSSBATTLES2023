const Rings: React.FC<{
    style: React.CSSProperties;
    left?: boolean;
}> = ({ style, left }) => {
    return (
        <div
            className="absolute  bg-[#009F74]"
            style={{
                animationName: left ? "motion-left" : "motion-right",
                animationDuration: "3s",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationTimingFunction: "linear",
                ...style,
            }}
        ></div>
    );
};
export const D3: React.FC<{ scale: number }> = ({ scale }) => {
    return (
        <div style={{ transform: `scale(${scale})` }}>
            <div className="h-[100px] relative w-[400px] flex justify-center">
                <img
                    style={{
                        animationDuration: "3s",
                    }}
                    className="h-[100px] w-[100px] z-10 animate-spin"
                    src="/sun.png"
                    alt="sun"
                />
            </div>
            <div className="flex">
                <div className="relative w-[200px] h-[400px]">
                    <Rings
                        left
                        style={{
                            backgroundColor: "#4E3A93",
                            width: 200,
                            height: 400,
                            borderRadius: "999px 0 0 999px",
                        }}
                    />
                    <Rings
                        left
                        style={{
                            top: 125,
                            right: "0",
                            width: 150,
                            height: 300,
                            borderRadius: "999px 0 0 999px",
                        }}
                    />
                </div>
                <div className="relative w-[200px] -translate-y-[100px]">
                    <Rings
                        style={{
                            backgroundColor: "#D4B201",
                            width: 175,
                            height: 350,
                            borderRadius: " 0 999px 999px 0",
                        }}
                    />
                    <Rings
                        style={{
                            width: "calc(225px/2)",
                            height: 225,
                            borderRadius: " 0 999px 999px 0",
                        }}
                    />
                    <Rings
                        style={{
                            top: 350,
                            backgroundColor: "#079A3F",
                            width: 200,
                            height: 300,
                            borderRadius: " 0 999px 999px 0",
                        }}
                    />
                    <Rings
                        style={{
                            top: 450,
                            width: 125,
                            height: 200,
                            borderRadius: " 0 999px 999px 0",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
