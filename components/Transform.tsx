import imageTransformDesktop from "@/assets/images/desktop/image-transform.jpg";
import imageTransformMobile from "@/assets/images/mobile/image-transform.jpg";
import imageStandoutDesktop from "@/assets/images/desktop/image-stand-out.jpg";
import imageStandoutMobile from "@/assets/images/mobile/image-stand-out.jpg";

import Image from "next/image";

function Transform() {
  return (
    <section>
      <h2 className="sr-only">Transform and Standout</h2>
      <article className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <Image
            className="hidden min-h-full min-w-full object-cover object-center sm:block"
            src={imageTransformDesktop}
            alt="White egg on yellow background"
          />
          <Image
            className="block sm:hidden"
            src={imageTransformMobile}
            alt="White egg on yellow background"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center sm:-order-1 sm:text-left">
          <div className="max-w-[445px]">
            <h3 className="cta mb-6">Transform your brand</h3>
            <p className="mb-8 font-normal leading-[1.66667] -tracking-[0.129px] text-secondary-400">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a
              href=""
              className="relative cursor-pointer font-heading font-black uppercase leading-[1.66667] tracking-[1px] text-secondary-200 transition-all after:absolute after:bottom-0 after:left-1/2 after:-z-10 after:block after:h-[10px] after:w-[137px] after:-translate-x-1/2 after:rounded-full after:bg-primary-500/0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:bg-primary-500/25"
            >
              Learn more
            </a>
          </div>
        </div>
        <div>
          <Image
            className="hidden min-h-full min-w-full object-cover object-center sm:block"
            src={imageStandoutDesktop}
            alt="White egg on yellow background"
          />
          <Image
            className="block sm:hidden"
            src={imageStandoutMobile}
            alt="White egg on yellow background"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center sm:text-left">
          <div className="max-w-[445px]">
            <h3 className="cta mb-6">Stand out to the right audience</h3>
            <p className="mb-8 font-normal leading-[1.66667] -tracking-[0.129px] text-secondary-400">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a
              href=""
              className="relative cursor-pointer font-heading font-black uppercase leading-[1.66667] tracking-[1px] text-secondary-200 transition-all after:absolute after:bottom-0 after:left-1/2 after:-z-10 after:block after:h-[10px] after:w-[137px] after:-translate-x-1/2 after:rounded-full after:bg-primary-300/0 after:transition-all after:duration-300 after:ease-in-out hover:after:bg-primary-300/25"
            >
              Learn more
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
export default Transform;
