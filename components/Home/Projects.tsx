import getProjectsByIds from "@/utils/getProjects";
import ProjectsSectionModel from "../Models/ProjectsSectionModel";

export default function Projects() {
  const projects = getProjectsByIds([1,2,3])

  return (
    <>
      <ProjectsSectionModel projectsArr={projects} />
    </>
  );
}
