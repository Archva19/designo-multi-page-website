import getProjectsByIds from "@/utils/getProjects";
import ProjectsSectionModel from "../Models/Projects/ProjectsSectionModel";

export default function Projects() {
  const projects = getProjectsByIds([2, 3]);

  return (
    <>
      <div className=" mb-71.5 md:mb-96 xl:mb-95">
        <ProjectsSectionModel projectsArr={projects} />
      </div>
    </>
  );
}
