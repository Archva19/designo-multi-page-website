import Image from "next/image";

export default function DesktopDeco() {
  return (
    <div className="hidden -z-999 xl:flex  h-full w-full absolute top-0 left-0 pt-118.75 pb-116.75 flex-col justify-between">
      <div className="w-full flex justify-start">
        <Image src="images/DesktopDeco/DesktopDeco1.svg" alt="" width="1006" height="594" />
      </div>
      <div className="w-full flex justify-end">
        <Image src="images/DesktopDeco/DesktopDeco2.svg" alt="" width="1006" height="594" />
      </div>
    </div>
  );
}
