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
          <div className="absolute flex flex-row items-center w-full px-6 md:px-10 pt-8 md:pt-9">
            <Image
              src={imageLogo}
              alt="logo"
              className="h-[clamp(1.5rem,0.70rem+3.40vw,2.06rem)] w-auto"
            />
            <nav className="hidden sm:block ml-auto">
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
          <section className="flex flex-col justify-center items-center h-full gap-[clamp(3.25rem,-0.6415rem+16.6038vw,6rem)] sm:pb-44">
            <h1 className="text-center">
              We are
              <span className="block sm:hidden" /> creatives
            </h1>
            <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
              <g
                stroke="#FFF"
                stroke-width="6"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 3v100M3 95.484l15 15 15-15" />
              </g>
            </svg>
          </section>
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
