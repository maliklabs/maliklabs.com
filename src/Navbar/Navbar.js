import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

// TODO: Add More Buttons

const Navbar = () => {
    return (
        <nav className="bg-[#2F2F2F] w-screen fixed z-10 h-16 pt-3 pb-3 pl-4 pr-6 flex flex-row items-center justify-between">
            <img src={logo} alt="Company Logo" className="w-[64px] h-[38px]" />
            <div className="flex flex-row items-center justify-center gap-3">
                <Menu
                    as="div"
                    className="relative inline-block text-left sm:hidden"
                >
                    <div>
                        <Menu.Button className="text-[#F3A946]">
                            <FontAwesomeIcon icon={faBars} />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-[7.5rem] rounded-md bg-[#1E1E1E] shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-3 py-3">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            type="button"
                                            className="transition duration-300 ease-in-out hover:bg-[#F3A946] w-24 h-8 rounded-3xl font-semibold text-[#F3A946] border-solid border-2 border-[#F3A946] hover:text-[#1E1E1E]"
                                        >
                                            <Link
                                                activeClass="active"
                                                to="projects-tree"
                                                spy={true}
                                                smooth={true}
                                                offset={-64}
                                                duration={1000}
                                            >
                                                Projects
                                            </Link>
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="px-3 py-3">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            type="button"
                                            className="transition duration-300 ease-in-out hover:bg-[#F3A946] w-24 h-8 rounded-3xl font-semibold text-[#F3A946] border-solid border-2 border-[#F3A946] hover:text-[#1E1E1E]"
                                        >
                                            <Link
                                                activeClass="active"
                                                to="projects-tree"
                                                spy={true}
                                                smooth={true}
                                                offset={-64}
                                                duration={1000}
                                            >
                                                Projects
                                            </Link>
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="px-3 py-3">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            type="button"
                                            className="transition duration-300 ease-in-out hover:bg-[#F3A946] w-24 h-8 rounded-3xl font-semibold text-[#F3A946] border-solid border-2 border-[#F3A946] hover:text-[#1E1E1E]"
                                        >
                                            <Link
                                                activeClass="active"
                                                to="projects-tree"
                                                spy={true}
                                                smooth={true}
                                                offset={-64}
                                                duration={1000}
                                            >
                                                Projects
                                            </Link>
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

                <button
                    type="button"
                    className="hidden sm:block transition duration-300 ease-in-out hover:bg-[#F3A946] w-24 h-8 rounded-3xl font-semibold text-[#F3A946] border-solid border-2 border-[#F3A946] hover:text-[#1E1E1E]"
                >
                    <Link
                        activeClass="active"
                        to="projects-tree"
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={1000}
                    >
                        Projects
                    </Link>
                </button>
                <button
                    type="button"
                    className="hidden sm:block transition duration-300 ease-in-out hover:bg-[#F3A946] w-24 h-8 rounded-3xl font-semibold text-[#F3A946] border-solid border-2 border-[#F3A946] hover:text-[#1E1E1E]"
                >
                    <Link
                        activeClass="active"
                        to="projects-tree"
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={1000}
                    >
                        Projects
                    </Link>
                </button>
                <button
                    type="button"
                    className="hidden sm:block transition duration-300 ease-in-out hover:bg-[#F3A946] w-24 h-8 rounded-3xl font-semibold text-[#F3A946] border-solid border-2 border-[#F3A946] hover:text-[#1E1E1E]"
                >
                    <Link
                        activeClass="active"
                        to="projects-tree"
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={1000}
                    >
                        Projects
                    </Link>
                </button>
            </div>
        </nav>
    );
};

export { Navbar as default };
