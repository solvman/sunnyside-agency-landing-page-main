import Image from "next/image";

import imageHeaderMobile from "@/assets/images/mobile/image-header.jpg";
import imageHeaderDesktop from "@/assets/images/desktop/image-header.jpg";
import imageLogo from "@/assets/images/logo.svg";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Home() {
  return (
    <>
      <header className="">
        <div className="relative h-[clamp(33.63rem,10.45rem+98.87vw,50rem)]">
          <div className="absolute flex flex-row justify-between items-center w-full px-6 md:px-10 pt-8 md:pt-9">
            <Image
              src={imageLogo}
              alt="logo"
              className="h-[clamp(1.5rem,0.70rem+3.40vw,2.06rem)] w-auto"
            />
            <nav className="hidden sm:block">
              <ul className="flex flex-row gap-9">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Project</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
            <HamburgerMenu />
          </div>
          <Image
            src={imageHeaderMobile}
            alt="header"
            fill
            className="sm:hidden object-cover object-center -z-10"
          />
          <Image
            src={imageHeaderDesktop}
            alt="header"
            fill
            className="hidden sm:block object-cover object-bottom -z-10"
          />
        </div>
      </header>
      <main></main>
    </>
  );
}
