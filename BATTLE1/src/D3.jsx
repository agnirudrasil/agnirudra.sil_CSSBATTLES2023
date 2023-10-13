const Rings = ({ style }) => {
    return <div className="absolute" style={{ ...style }}></div>;
};
export const D3 = () => {
    return (
        <div>
            <div className="h-[100px] relative w-[400px] flex justify-center">
                <img className="h-[100px] z-10" src="/sun.png" alt="sun" />
            </div>
            <div className="flex">
                <div className="relative w-[200px] h-[400px]">
                    <Rings
                        style={{
                            backgroundColor: "#4E3A93",
                            width: 200,
                            height: 400,
                            borderRadius: "999px 0 0 999px",
                        }}
                    />
                    <Rings
                        style={{
                            top: 125,
                            right: "0",
                            backgroundColor: "white",
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
                            backgroundColor: "white",
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
                            backgroundColor: "white",
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
