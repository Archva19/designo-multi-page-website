import PageBannerModel from "@/components/Models/Banner/PageBannerModel";
import DesktopDecoPage from "@/components/Models/Decorations/DesktopDecoPage";
import Projects from "@/components/WebDesign/Projects";
import Services from "@/components/WebDesign/Services";

export default function page() {
  return (
    <>
      <main className="w-full relative">
        <PageBannerModel
          title={"Web Design"}
          desc={
            "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
          }
        />
        <div className="w-[87.2%] mx-auto md:w-[89.713%] xl:w-[77.222%]">
          <Services />
          <Projects />
        </div>
        <DesktopDecoPage />
      </main>
    </>
  );
}
