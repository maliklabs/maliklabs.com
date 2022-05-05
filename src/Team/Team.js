import "./Team.css";
import Nouman from "./nm.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
    return (
        <div id="team" className="bg-[#1E1E1E] w-screen h-screen">
            <p className="text-[#F3A946] pl-4 font-semibold text-4xl underline">
                Meet The Team
            </p>
            {/* Team Members Here */}
            <div className="w-auto max-w-6xl h-auto sm:h-60 ml-4 mt-4 mr-6 outline outline-2 outline-[#F3A946] border-solid border-[1rem] border-[#1E1E1E] rounded-xl flex flex-row items-center overflow-hidden divide-x divide-[#F3A946]">
                <div className="flex flex-col items-start justify-evenly w-40 sm:h-full mr-4 gap-4 sm:gap-0">
                    <p className="text-[#F3A946] text-lg leading-none">
                        Nouman Malik
                    </p>
                    <p className="text-[#F3A946] font-light text-sm leading-none">
                        Founder & CEO
                    </p>
                    <img
                        src={Nouman}
                        alt="Nouman Malik"
                        className="w-32 rounded-xl"
                    />
                </div>
                {/* <div className="w-[0px] h-full mx-4 border-solid border-[1px] border-[#F3A946] rounded-lg"></div> */}
                <div className="flex flex-col justify-start w-full h-full gap-1 pl-4">
                    <div className="h-fit sm:h-1/3">
                        <p className="text-[#F3A946] font-semibold">Profile</p>
                        <p className="text-xs text-[#F3A946]">
                            I am a student studying Computer Science with a
                            specialization in AI. I love to spend my time
                            learning new technologies in my free time. My goal
                            for my company is to be the go-to expert for one
                            specific task
                        </p>
                    </div>
                    <div className="w-full h-[0px] border-solid border-[1px] border-[#F3A946] rounded-lg"></div>
                    <div className="h-fit sm:h-1/3">
                        <p className="text-[#F3A946] font-semibold">
                            Interests
                        </p>
                        <p className="text-xs text-[#F3A946]">
                            Tech enthusiast. Avid gamer. Music enjoyer. Crypto
                            fanatic. Bubble tea (Specifically tapioca in a
                            french vanilla flavoured coffee). Open source
                            appreciator.
                        </p>
                    </div>
                    <div className="w-full h-[0px] border-solid border-[1px] border-[#F3A946] rounded-lg"></div>
                    <div className="h-fit sm:h-1/3">
                        <p className="text-[#F3A946] font-semibold">Links</p>
                        <p className="text-[#F3A946] text-4xl">
                            <a
                                href="https://github.com/NoumanAMalik"
                                target="_blank"
                                rel="noreferrer"
                                className="mr-2"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nouman-a-malik"
                                target="_blank"
                                rel="noreferrer"
                                className="mx-2"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a
                                href="mailto: maliklabs@outlook.com"
                                className="mx-2"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </p>
                    </div>
                </div>
                {/* 
                <div
                    class="badge-base LI-profile-badge"
                    data-locale="en_US"
                    data-size="large"
                    data-theme="dark"
                    data-type="VERTICAL"
                    data-vanity="nouman-a-malik"
                    data-version="v1"
                ></div> */}
            </div>
        </div>
    );
};

export { Team as default };
