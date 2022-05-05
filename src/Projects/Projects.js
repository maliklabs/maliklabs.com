import "./Projects.css";
import tree from "./tree.png";

const Projects = () => {
    return (
        <div
            id="projects-tree"
            className="bg-[#1E1E1E] w-screen h-screen flex flex-col items-center gap-1"
        >
            <p className="bg-[#F3A946] mt-1 p-4 border-solid border-2 border-[#1E1E1E] rounded-xl text-2xl">
                Project Tree
            </p>
            <div className="relative w-[446px] flex justify-center">
                <img
                    src={tree}
                    alt="Project Tree"
                    className="w-[105px] sm:w-[210px]"
                />
                {/* Projects here */}
                <div className="absolute border-solid border-[#f3a946] border-2 rounded-xl p-2 top-4 right-10 sm:top-14 sm:-right-4">
                    <p className="text-[#F3A946]">Coming Soon</p>
                </div>
            </div>
        </div>
    );
};

export { Projects as default };
