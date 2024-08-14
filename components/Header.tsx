import Image from "next/image";

import HamburgerMenu from "@/components/HamburgerMenu";

import imageHeaderMobile from "@/assets/images/mobile/image-header.jpg";
import imageHeaderDesktop from "@/assets/images/desktop/image-header.jpg";
import imageLogo from "@/assets/images/logo.svg";

function Header() {
  return (
    <header className="relative h-[clamp(33.63rem,10.45rem+98.87vw,50rem)]">
      <div className="absolute flex w-full flex-row items-center px-6 pt-8 md:px-10 md:pt-9">
        <Image
          src={imageLogo}
          alt="logo"
          className="h-[clamp(1.5rem,0.70rem+3.40vw,2.06rem)] w-auto"
          priority
        />
        <nav className="ml-auto hidden sm:block">
          <ul className="flex flex-row gap-9">
            <li>
              <a className="btn" href="">
                About
              </a>
            </li>
            <li>
              <a className="btn" href="">
                Services
              </a>
            </li>
            <li>
              <a className="btn" href="">
                Project
              </a>
            </li>
            <li>
              <a className="btn" href="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <HamburgerMenu />
      </div>
      <section className="flex h-full flex-col items-center justify-center gap-[clamp(3.25rem,-0.6415rem+16.6038vw,6rem)] sm:pb-44">
        <h1 className="text-center">
          We are
          <span className="block sm:hidden" /> creatives
        </h1>
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            strokeWidth="6"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </section>
      <Image
        src={imageHeaderMobile}
        alt="header"
        fill
        className="-z-10 object-cover object-center sm:hidden"
      />
      <Image
        src={imageHeaderDesktop}
        alt="header"
        fill
        className="-z-10 hidden object-cover object-bottom sm:block"
      />
    </header>
  );
}
export default Header;
