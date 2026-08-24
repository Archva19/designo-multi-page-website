export default function PageBannerModel({ title, desc }:{title:string, desc:string}) {
  return (
    <>
      <div className="bg-[url('/images/PageBanner/PageBannerBgMobile.svg')] bg-no-repeat bg-contain bg-right md:bg-[url('/images/PageBanner/PageBannerBgTablet.svg')] xl:bg-[url('/images/PageBanner/PageBannerBgDesktop.svg')] bg-[#E7816B] text-white w-full mx-auto mb-24 py-26.25 px-4 flex flex-col gap-6 text-center md:mb-30 md:rounded-[15px] md:py-16 md:px-35 md:w-[89.713%] xl:px-87 xl:mb-40 xl:w-[77.222%]">
        <p className="font-medium text-[32px] leading-9 md:text-[48px] md:leading-12">{title}</p>
        <p className="text-[15px] leading-6.25 md:text-[16px] md:leading-6.5">{desc}</p>
      </div>
    </>
  );
}
