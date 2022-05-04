import "./Navbar.css";
import logo from "./logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

// TODO: Add More Buttons

const Navbar = () => {
    return (
        <nav className="bg-[#2F2F2F] w-screen absolute h-16 pt-3 pb-3 pl-4 flex flex-row items-center">
            <img src={logo} alt="Company Logo" className="w-[64px] h-[38px]" />
            <Link
                activeClass="active"
                to="yellow"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >
                <button type="button">Peepeepoopoo</button>
            </Link>
        </nav>
    );
};

export { Navbar as default };
