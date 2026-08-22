import Link from "next/link";

export default function MobileNav({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      {isOpen && (
        <div className="w-screen h-screen absolute top-0 left-0 bg-[#1D1C1E]/40">
          <div className="bg-[#1D1C1E] mt-24 py-12 px-6">
            <nav
              className="flex flex-col gap-8 text-white text-[24px] leading-6.25 tracking-[2px]"
            >
              <Link href="/Company">OUR COMPANY</Link>
              <Link href="/Locations">LOCATIONS</Link>
              <Link href="/Contact">CONTACT</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
