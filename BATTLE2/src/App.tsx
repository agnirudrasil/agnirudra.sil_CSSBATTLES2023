import { D3 } from "./D3";
import "./App.css";
import { FootBall } from "./Football";
import { D1 } from "./D1";
import { D9 } from "./D9";
import { Header } from "./Header";

function App() {
    return (
        <main className="w-screen h-screen -z-30 gap-4 flex items-center justify-center relative gradient">
            <D9 />
            <div className="flex flex-col items-center -z-20 rounded-md shadow-inner border p-4 h-[600px]">
                <Header />
                <div className="relative">
                    <div className="animate-bounce">
                        <FootBall />
                    </div>
                    <h1 className="font-display text-8xl text-white drop-shadow-md">
                        ASIAN GAMES
                    </h1>
                </div>
                <h3 className=" font-body text-2xl text-gray-200">
                    Coming to Japan on:
                </h3>
                <div className="flex mt-4 items-center justify-center gap-5">
                    <div className="bg-white rounded-md border shadow-inner text-6xl font-display p-4">
                        4<sup>th</sup>
                    </div>
                    <div className="bg-white rounded-md shadow-inner border text-6xl font-display p-4">
                        Oct
                    </div>
                    <div className="bg-white rounded-md shadow-inner border text-6xl font-display p-4">
                        2026
                    </div>
                </div>
                <div
                    className="w-[50px] h-[50px]"
                    style={{
                        marginLeft: "-20px",
                        transform: "scale(0.2)",
                    }}
                >
                    <D1 />
                </div>
            </div>
            <D9 />
        </main>
    );
}

export default App;
