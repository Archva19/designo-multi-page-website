export default function Banner() {
  return (
    <>
      <section className="mb-30 bg-[#E7816B] pt-20 px-6 bg-[url('/images/Home/Mobile/bannerBgMobile.svg')] bg-no-repeat bg-right text-white flex flex-col items-center justify-center text-center gap-20 md:bg-[url('/images/Home/Tablet/bannerBgTablet.svg')] xl:bg-[url('/images/Home/Desktop/bannerBgDesktop.svg')] md:rounded-[15px] md:pt-15 md:gap-17.25 xl:mb-40 xl:flex-row xl:items-start xl:pt-34.75 xl:text-left xl:gap-24">
        <div className="flex flex-col items-center justify-center md:max-w-143.25 xl:max-w-135 xl:items-start">
          <p className="font-medium text-[32px] leading-9 mb-3.5 md:mb-2 md:text-[48px] md:leading-12 xl:mb-2.75">
            Award-winning custom designs and digital branding solutions
          </p>
          <p className="text-[15px] leading-6.25 mb-6 md:mb-4.75 md:text-[16px] md:leading-6.5 xl:mb-10">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="text-[#333136] text-[15px] font-medium leading-[100%] tracking-[1px] bg-white pt-4.5 pb-4 px-6 flex items-center justify-center rounded-lg hover:text-white hover:bg-[#FFAD9B]">
            Learn More
          </button>
        </div>
        <div className="bg-[url('/images/Home/Mobile/mobileImgMobile.png')] md:bg-[url('/images/Home/Tablet/mobileImgTablet.png')] xl:bg-[url('/images/Home/Desktop/mobileImgDesktop.png')] w-71 h-92.75 bg-no-repeat bg-cover bg-center md:h-97 xl:h-125.25"></div>
      </section>
    </>
  );
}
