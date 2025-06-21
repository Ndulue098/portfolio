// "use client"
import Link from "next/link";

export default function Logo() {
  return ( 
    <Link href="#top" className="flex gap-5 items-center justify-center ">
      <h2 className="text-2xl font-semibold uppercase ">Christian</h2>
      <div className="w-3 h-3 bg-lime-300 rounded-full"></div>
      {/* <Image src={isDark?assets.logo_dark:assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" /> */}
    </Link>
  );
}
