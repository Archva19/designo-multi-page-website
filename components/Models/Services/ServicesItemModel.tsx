import { Service } from "@/types/types";

export default function ServicesItemModel({ service }: { service: Service }) {
  return (
    <>
      <div className="w-full rounded-[15px] bg-[#FDF3F0] flex flex-col md:flex-row lg:flex-col lg:w-[350px]">
        <img
          className={`object-cover ${service.title === "PHOTON" ? "object-[center_42%]" : "object-top"} w-full h-80 md:w-84.5 md:h-77.5 lg:w-full lg:h-80 rounded-tl-[15px] rounded-tr-[15px] md:rounded-tr-none md:rounded-bl-[15px] lg:rounded-bl-none lg:rounded-tr-[15px]`}
          src={service.img}
        />
        <div className="py-8 px-7.5 flex flex-col gap-4 items-center justify-center text-center md:flex-1 md:pr-10.25 md:pl-8">
          <p className="font-medium text-[20px] leading-6.5 tracking-[5px] text-[#E7816B]">
            {service.title}
          </p>
          <p className="text-[#333136] text-[16px] leading-6.5">
            {service.desc}
          </p>
        </div>
      </div>
    </>
  );
}
