import Brand from "../Models/Brand";
import LocationModel from "../Models/LocationModel";
import Navigation from "../Models/Navigation";
import FooterBanner from "./FooterBanner";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#1D1C1E] pt-63.25 pb-16 md:pt-41.5 md:pb-20 xl:mt-36 xl:pb-18 relative">
        <div className="w-[87.2%] mx-auto flex flex-col gap-10 md:w-[89.713%] xl:w-[77.222%]">
          <div className = "w-full flex flex-col gap-8 items-center md:flex-row md:justify-between md:pb-10 md:border-b md:border-white/10">
            <Brand color={"white"} />
            <div className = "w-full pt-8 border-t border-white/10 md:pt-0 md:w-auto md:border-0">
                 <Navigation color={"white"} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-10 items-center md:flex-row md:items-end md:justify-between md:gap-12.5">
            <div className="text-white/50">
              <LocationModel
                locTitle={"Designo Central Office"}
                locInfo={"3886 Wellington Street Toronto, Ontario M9C 3J5"}
                contactTitle={"Contact Us (Central Office)"}
                contactPhone={"P : +1 253-863-8967"}
                contactMail={"M : contact@designo.co"}
              />
            </div>
            <SocialMedia />
          </div>
        </div>
        <FooterBanner/>
      </footer>
    </>
  );
}
