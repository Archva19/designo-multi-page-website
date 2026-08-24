import DesktopDeco from "../Models/DesktopDeco";
import Banner from "./Banner";
import Projects from "./Projects";
import Qualities from "./Qualities";

export default function Main() {
  return (
    <>
      <main className="w-full">
        <Banner />
        <div className="w-[87.2%] mx-auto md:w-[89.713%] xl:w-[77.222%]">
          <Projects />
          <Qualities/>
        </div>
        <DesktopDeco/>
      </main>
    </>
  );
}
