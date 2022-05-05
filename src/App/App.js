import "./App.css";
import Navbar from "../Navbar";
import Projects from "../Projects";
import Team from "../Team";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

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
                    className="pl-4 pr-4 sm:pl-0 sm:pr-0 w-[500px] h-[295px] mb-6"
                />
                <p className="font-bold text-5xl text-[#F3A946]">Malik Labs</p>
                <p className="font-bold text-1xl text-[#F3A946]">
                    We <FontAwesomeIcon icon={faHeart} /> Open Source Projects
                </p>
            </div>
            <Projects />
            <Team />
        </>
    );
};

export { App as default };
