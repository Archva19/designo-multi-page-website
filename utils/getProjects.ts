import { AllProjects } from "@/data/projects";
import { Project } from "@/types/types";

function getProjectsByIds(ids: number[]) {
  const projects: Project[] = [];

  // map-ის ნაცვლად forEach
  ids.forEach((id, index) => {
    const project = AllProjects.find((p) => p.id === id)!;

    if (project) {
      projects.push({
        ...project,
        divType: ids.length === 3 && index === 0 ? 2 : 1,
      });
    }
  });

  return projects;
}

export default getProjectsByIds;
