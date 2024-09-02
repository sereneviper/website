import { PROJECT_TILES } from "../lib/data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="m-4">
      <h1 className="flex justify-center font-barlow text-2xl text-amber-800 text-opacity-85">
        <span className="mx-auto">Some of my Work</span>
      </h1>
      <hr className="my-4 border border-amber-800 border-opacity-50" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECT_TILES.map((project) => (
          <Link to={"/projects/" + project.id} key={project.id}>
            <div className="rounded border border-amber-800 p-2">
              <img
                src={project.imageSrc}
                className="m-auto h-44 object-contain"
              />
              <div className="flex justify-center font-barlow text-amber-800 text-opacity-85">
                {project.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
