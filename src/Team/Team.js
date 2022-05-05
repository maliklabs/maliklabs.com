import "./Team.css";
import Nouman from "./nm.jpg";

const Team = () => {
    return (
        <div id="team" className="bg-[#1E1E1E] w-screen h-screen">
            <p className="text-[#F3A946] pl-4 font-semibold text-4xl underline">
                Meet The Team
            </p>
            {/* Team Members Here */}
            <div className="w-auto max-w-6xl h-52 ml-4 mt-4 mr-6 p-4 border-solid border-2 border-[#F3A946] rounded-xl flex flex-row items-center">
                <div className="flex flex-col items-start justify-between w-40 h-full">
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
                <div className="w-[0px] h-full mx-4 border-solid border-[1px] border-[#F3A946] rounded-lg"></div>
                <div className="flex flex-col justify-start w-full h-full gap-1">
                    <div className="h-fit">
                        <p className="text-[#F3A946] font-semibold">Profile</p>
                        <p className="text-xs text-[#F3A946]">
                            I am a student studying Computer Science with a
                            specialization in AI. I love to spend my time
                            learning new technologies in my free time. My goal
                            is to be a successful software developer, and maybe
                            even one day start my own company.
                        </p>
                    </div>
                    <div className="w-full h-[0px] border-solid border-[1px] border-[#F3A946] rounded-lg"></div>
                    <div className="h-fit">
                        <p className="h-1/3">Interests</p>
                    </div>
                    <div className="w-full h-[0px] border-solid border-[1px] border-[#F3A946] rounded-lg"></div>
                    <div className="h-fit">
                        <p className="h-1/3">Links</p>
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
