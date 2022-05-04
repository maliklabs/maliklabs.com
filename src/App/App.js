import "./App.css";
import Navbar from "../Navbar";
import Projects from "../Projects";
import logo from "./logo.png";

const App = () => {
    return (
        <>
            <Navbar />
            <div
                id="landing-page"
                className="bg-[#1E1E1E] w-screen h-screen flex flex-col items-center justify-center"
            >
                <img
                    src={logo}
                    alt="Company Logo"
                    className="w-[500px] h-[295px] mb-6"
                />
                <p className="font-bold text-5xl text-[#F3A946]">Malik Labs</p>
                <p className="font-bold text-1xl text-[#F3A946]">
                    We Like Open Source Projects
                </p>
            </div>
            <Projects />
        </>
    );
};

export { App as default };
