import DesktopDeco from "@/components/Models/DesktopDeco";
import PageBannerModel from "@/components/Models/PageBannerModel";

export default function page() {
  return (
    <>
      <main className="w-full">
        <PageBannerModel
          title={"Web Design"}
          desc={
            "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
          }
        />
        <div className="w-[87.2%] mx-auto md:w-[89.713%] xl:w-[77.222%]"></div>
        <DesktopDeco />
      </main>
    </>
  );
}
