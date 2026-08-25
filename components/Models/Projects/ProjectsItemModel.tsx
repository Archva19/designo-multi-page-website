import { Project } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsItemModel({ project }: { project: Project }) {
  return (
    <>
      <div
        className={`group relative rounded-[15px] w-full bg-(image:--bg-mobile) md:bg-(image:--bg-tablet) xl:bg-(image:--bg-desktop) bg-cover bg-no-repeat bg-center xl:flex-1 ${project.divType === 1 && "max-h-77"}`}
        style={
          {
            "--bg-mobile": `url(${project.bgImageMobile})`,
            "--bg-tablet": `url(${project.bgImageTablet})`,
            "--bg-desktop": `url(${project.bgImageDesktop})`,
          } as React.CSSProperties
        }
      >
        <div className="bg-[#000000]/50 absolute w-full h-full top-0 left-0 rounded-[15px] group-hover:bg-[#E7816B]/80"></div>
        <Link
          className={`z-10 relative w-full py-22.5 flex flex-col gap-[11.97px] items-center justify-center text-white md:py-13.25 md:gap-6 ${project.divType! === 1 ? "xl:py-26.75" : "xl:py-68.25"}`}
          href={`${project.route}`}
        >
          <p className="font-medium text-[28px] leading-9 tracking-[1.4px] md:text-[40px] md:leading-12 md:tracking-[2px]">
            {project.title}
          </p>
          <div className="flex items-center gap-5.25 h-5.5">
            <p className="font-medium text-[15px] leading-[100%] tracking-[5px]">
              VIEW PROJECTS
            </p>
            <Image
              alt="arrow"
              src="icons/projectsArrow.svg"
              width="4"
              height="8"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
