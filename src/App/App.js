import "./App.css";
import Navbar from "../Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <div
                id="landing-page"
                className="bg-[#1E1E1E] w-screen h-screen flex items-center justify-center"
            >
                <p className="text-white text-lg">Coming soon ...</p>
            </div>
            <div id="yellow" className="bg-yellow-400 w-screen h-screen">
                <p className="text-black">Testing</p>
            </div>
        </>
    );
};

export { App as default };
