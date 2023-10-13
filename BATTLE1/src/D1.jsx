export const D1 = () => {
    return (
        <div className="flex w-[700px] h-[500px]">
            <div className="w-[350px] h-[500px] z-10 bg-[#61306D] flex justify-center">
                <div className="bg-[#F7EB7D] w-[75px] h-[75px] rounded-full mt-10"></div>
            </div>
            <div className="w-[0] h-full relative">
                <div
                    className="w-[100px] bottom-0 absolute z-50 h-[250px] bg-[#F7EB7D] -translate-x-1/2"
                    style={{
                        clipPath: "ellipse(78px 287px at 95px 13px)",
                    }}
                ></div>
                <div
                    className="w-[100px] absolute z-50 h-[250px] bg-[#F7EB7D] -translate-x-[90%]"
                    style={{
                        clipPath: "ellipse(94px 291px at 98px 248px)",
                    }}
                ></div>
            </div>
            <div className="w-[250px] -z-10 h-[500px] bg-[#F7EB7D] flex justify-center">
                <div className="bg-[#61306D] w-[75px] h-[75px] rounded-full mt-10"></div>
            </div>
        </div>
    );
};
