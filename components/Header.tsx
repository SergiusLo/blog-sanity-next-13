import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold py-5">
      <div className="flex items-center ">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/images/logo.svg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1 className="uppercase text-green-700">Leaf</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-green-700 text-[#F7AB0A] flex items-center rounded-full"
        >
          Sign up to the lover plants
        </Link>
      </div>
    </header>
  );
}

export default Header;
