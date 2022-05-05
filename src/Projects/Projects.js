import "./Projects.css";
import tree from "./tree.png";

const Projects = () => {
    return (
        <div
            id="projects-tree"
            className="bg-[#1E1E1E] w-screen h-screen flex flex-col items-center gap-1 relative"
        >
            <p className="bg-[#F3A946] mt-1 p-4 border-solid border-2 border-[#1E1E1E] rounded-xl text-2xl">
                Projects Tree
            </p>
            <img src={tree} alt="Project Tree" className="w-[210px]" />
        </div>
    );
};

export { Projects as default };
