import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex h-screen min-h-36 min-w-80 flex-col bg-gradient-to-r from-amber-200 to-amber-400 px-12 pb-6 pt-20 text-lg">
      <Link to={"/"}>
        <div className="m-2 cursor-pointer font-barlow text-amber-800 text-opacity-85 hover:underline">
          About Me
        </div>
      </Link>

      <Link to={"/projects"}>
        <div className="m-2 cursor-pointer font-barlow text-amber-800 text-opacity-85 hover:underline">
          Projects
        </div>
      </Link>

      <Link to={"/blogs"}>
        <div className="m-2 cursor-pointer font-barlow text-amber-800 text-opacity-85 hover:underline">
          Blogs
        </div>
      </Link>

      <Link to={"/resume"}>
        <div className="m-2 cursor-pointer font-barlow text-amber-800 text-opacity-85 hover:underline">
          Resume
        </div>
      </Link>

      <div className="flex-grow"></div>
      <hr className="my-2 border border-amber-800 border-opacity-50" />
      <div className="m-2 flex items-center justify-center gap-2 font-barlow text-xl text-amber-800 text-opacity-85">
        <div className="m-2 font-barlow text-base text-amber-800 text-opacity-85">
          Find me @:
        </div>
        <Link to={"https://github.com/sereneviper"}>
          <FaGithub />
        </Link>

        <Link to={"https://linkedin.com/rishabhshukla47"}>
          <FaLinkedin />
        </Link>

        <Link to={"https://x.com/sereneviper"}>
          <FaSquareXTwitter />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
