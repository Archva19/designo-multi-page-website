import DesktopDeco1 from "../Models/Decorations/DesktopDeco1";
import DesktopDeco2 from "../Models/Decorations/DesktopDeco2";

export default function DesktopDecoMain() {
  return (
    <>
      <div className="-z-999 hidden xl:flex h-full w-full absolute top-0 left-0 pt-118.75 pb-116.75 flex-col justify-between">
        <DesktopDeco1 />
        <DesktopDeco2 />
      </div>
    </>
  );
}
