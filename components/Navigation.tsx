import Link from "next/link";

export default function Navigation({ color }: { color: string }) {
  return (
    <>
      <nav
        className="flex flex-col items-center justify-center md:flex-row text-[14px] leading-3.5 tracking-[2px] gap-8 md:gap-10.5"
        style={{ color: color }}
      >
        <Link href="/Company">OUR COMPANY</Link>
        <Link href="/Locations">LOCATIONS</Link>
        <Link href="/Contact">CONTACT</Link>
      </nav>
    </>
  );
}
