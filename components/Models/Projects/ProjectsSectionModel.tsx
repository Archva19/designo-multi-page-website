import { Project } from "@/types/types";
import ProjectsItemModel from "./ProjectsItemModel";

export default function ProjectsSectionModel({
  projectsArr,
}: {
  projectsArr: Project[];
}) {
  const firstTypeProjects = projectsArr.filter(
    (project) => project.divType === 1,
  );
  const [secondTypeProject] = projectsArr.filter(
    (project) => project.divType === 2,
  );

  console.log(secondTypeProject);
  return (
    <>
      <section className="w-full mx-auto gap-y-6 gap-x-7.5 flex flex-wrap">
        {secondTypeProject && <ProjectsItemModel project={secondTypeProject} />}
        <div
          className={`w-full flex flex-col gap-6 ${secondTypeProject ? "flex-1" : "xl:flex-row xl:gap-7.5"}`}
        >
          {firstTypeProjects.map((item) => (
            <ProjectsItemModel key={item.id} project={item} />
          ))}
        </div>
      </section>
    </>
  );
}
