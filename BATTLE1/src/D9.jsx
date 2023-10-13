function Tower({ floors, rooms, litIndices, clipPath }) {
    return (
        <div className="w-max">
            <div
                style={{
                    background: "black",
                    border: "2px solid black",
                    height: "75px",
                    clipPath,
                }}
            ></div>
            <div
                style={{
                    width: "max-content",
                    display: "grid",
                    gridTemplateColumns: `repeat(${rooms}, 50px)`,
                    gridTemplateRows: `repeat(${floors}, 75px)`,
                    border: "5px solid black",
                    height: "max-content",
                }}
            >
                {Array(floors * rooms)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            style={{
                                background: litIndices.includes(i)
                                    ? "#FFFFAF"
                                    : "#2E3638",
                                border: "2px solid black",
                            }}
                            key={i}
                        />
                    ))}
            </div>
        </div>
    );
}

export const D9 = () => {
    return (
        <div className="flex gap-3 items-end bg-[#1B232B] w-max">
            <Tower
                clipPath={"polygon(0 100%, 100% 0, 100% 100%)"}
                litIndices={[2, 3, 7]}
                floors={5}
                rooms={2}
            />
            <Tower
                clipPath={"polygon(0 100%, 50% 0, 100% 100%)"}
                litIndices={[0, 4, 5, 9, 12, 15]}
                floors={9}
                rooms={2}
            />
            <Tower
                clipPath={"polygon(0 100%, 100% 0, 100% 100%)"}
                litIndices={[0, 3, 10, 13]}
                floors={6}
                rooms={3}
            />
        </div>
    );
};
