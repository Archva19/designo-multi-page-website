import Link from "next/link";

export default function Brand({ color }: { color: string }) {
  return (
    <>
      <Link className = "flex items-center gap-4"href="/">
        <div
          className="rounded-full w-6 h-6"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(231, 129, 107, 0.01), #E7816B)",
          }}
        ></div>
        <p
          className="font-spartan font-bold text-[24px] tracking-[5px] leading-[100%]"
          style={{ color: color }}
        >
          DESIGNO
        </p>
      </Link>
    </>
  );
}
