import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-scroll";

// TODO: Add More Buttons

const Navbar = () => {
    return (
        <nav className="bg-[#2F2F2F] w-screen fixed h-16 pt-3 pb-3 pl-4 flex flex-row items-center">
            <img src={logo} alt="Company Logo" className="w-[64px] h-[38px]" />
            <Link
                activeClass="active"
                to="projects-tree"
                spy={true}
                smooth={true}
                offset={64}
                duration={1000}
            >
                <button type="button">Projects</button>
            </Link>
        </nav>
    );
};

export { Navbar as default };
