export default function FooterBanner() {
  return (
    <>
      <div className="w-[87.2%] rounded-[15px] flex flex-col items-center justify-center text-center text-white mx-auto absolute -top-47.5 left-1/2 -translate-x-1/2 bg-[#E7816B] py-16 px-6 bg-[url('/images/Footer/FooterBannerBgMobile.svg')] bg-no-repeat bg-right bg-contain md:w-[89.713%] md:-top-66 md:bg-[url('/images/Footer/FooterBannerBgTablet.svg')] md:py-14.25 md:px-[58.5px] xl:w-[77.222%] xl:-top-55 xl:bg-[url('/images/Footer/FooterBannerBgDesktop.svg')] xl:flex-row xl:py-18 xl:px-23.75 xl:justify-between xl:text-left">
        <div className = "flex flex-col items-center xl:items-start">
          <p className="mb-1.5 font-medium text-[32px] leading-9 h-20.5 md:text-[40px] md:leading-10 md:w-83.75 md:h-24.5 md:mb-0">
            Let’s talk about your project
          </p>
          <p className="mb-8 text-[15px] leading-6.25 md:w-110 md:leading-6.5 md:text-[16px] xl:w-114.75 xl:mb-0">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button className="py-4.25 h-14 px-[18.5px] flex items-center justify-center text-[#333136] bg-white rounded-lg font-medium text-[15px] tracking-[1px] leading-[100%] hover:text-white hover:bg-[#FFAD9B]">
          GET IN TOUCH
        </button>
      </div>
    </>
  );
}
