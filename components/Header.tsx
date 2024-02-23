import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import localFont from "next/font/local";

const avertaSemibold = localFont({ src: "../fonts/Averta-Semibold.woff2" });

const Header = () => {
  return (
    <header className=" fixed w-full bg-[#f4f2f0] z-10 transition-[background-color] duration-[0.3s] ease-[ease-out] py-[1rem]">
      <div className="max-w-[1536px] mx-auto px-3 xl:px-8 flex justify-between items-center">
        {/* mobile menu */}
        <MobileMenu />

        {/* desktop menu */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-x-[1.8rem]">
            <li>
              <Link href="/" className={`${avertaSemibold.className} transition-all duration-[0.3s] ease-[ease-out]  text-[1rem] leading-[2.4rem] tracking-[0.25px] no-underline text-[#312a2c] hover:text-[#598000]`}>
                about
              </Link>
            </li>
            <li>
              <Link href="/" className={`${avertaSemibold.className} transition-all duration-[0.3s] ease-[ease-out]  text-[1rem] leading-[2.4rem] tracking-[0.25px] no-underline text-[#312a2c] hover:text-[#598000]`}>
                shop
              </Link>
            </li>
            <li>
              <Link href="/" className={`${avertaSemibold.className} transition-all duration-[0.3s] ease-[ease-out]  text-[1rem] leading-[2.4rem] tracking-[0.25px] no-underline text-[#312a2c] hover:text-[#598000]`}>
                find us
              </Link>
            </li>
            <li>
              <Link href="/" className={`${avertaSemibold.className} transition-all duration-[0.3s] ease-[ease-out]  text-[1rem] leading-[2.4rem] tracking-[0.25px] no-underline text-[#312a2c] hover:text-[#598000]`}>
                blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* plant snacks logo */}
        <div className="ml-4 xl:ml-[-7rem]">
          <Link href="/">
            <Image src="/images/header/logo.svg" alt="plant snacks logo" width="88" height="73" sizes="100vw" priority className="xl:hidden" />
            <Image src="/images/header/logo.svg" alt="plant snacks logo" width="127" height="73" sizes="100vw" priority className="hidden xl:inline" />
          </Link>
        </div>

        {/* account & shopping cart */}
        <ul className="flex items-center gap-x-3 xl:gap-x-7">
          <li>
            <Link href="/" className="hover:text-[#598000] transition-all duration-[0.3s] ease-[ease-out]">
              <svg aria-hidden="true" focusable="false" role="presentation" className="inline-block w-5 h-5 align-middle fill-current" viewBox="0 0 28.33 37.68">
                <path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#598000] transition-all duration-[0.3s] ease-[ease-out]">
              <svg aria-hidden="true" focusable="false" role="presentation" className="inline-block w-5 h-5 align-middle fill-current" viewBox="0 0 37 40">
                <path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
