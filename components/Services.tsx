import Image from "next/image";

import imageDesignDesktop from "@/assets/images/desktop/image-graphic-design.jpg";
import imageDesignMobile from "@/assets/images/mobile/image-graphic-design.jpg";
import imagePhotograyDesktop from "@/assets/images/desktop/image-photography.jpg";
import imagePhotograyMobile from "@/assets/images/mobile/image-photography.jpg";

function Services() {
  return (
    <section className="sm:flex sm:flex-row">
      <h2 className="sr-only">Services</h2>
      <article className="relative flex h-[600px] flex-col-reverse items-center gap-7 px-6 pb-14 text-center text-primary-800 sm:w-1/2">
        <h3 className="order-1 max-w-[339px] font-heading text-xl font-black -tracking-[0.2px]">
          Graphic Design
        </h3>
        <p className="max-w-[339px] text-base font-semibold leading-[1.6875] -tracking-[0.114px]">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
        <Image
          src={imageDesignDesktop}
          alt="Cherries on green background"
          sizes="(min-width: 640px) 50vw, 100vw"
          fill
          className="-z-10 hidden object-cover sm:block"
        />
        <Image
          src={imageDesignMobile}
          alt="Cherries on green background"
          sizes="100vw"
          fill
          className="-z-10 block object-cover sm:hidden"
        />
      </article>
      <article className="relative flex h-[600px] flex-col-reverse items-center gap-7 px-6 pb-14 text-center text-primary-700 sm:w-1/2">
        <h3 className="order-1 max-w-[339px] font-heading text-xl font-black -tracking-[0.2px]">
          Photography
        </h3>
        <p className="max-w-[339px] text-base font-semibold leading-[1.6875] -tracking-[0.114px]">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
        <Image
          src={imagePhotograyDesktop}
          alt="Orange on blue background"
          sizes="(min-width: 640px) 50vw, 100vw"
          fill
          className="-z-10 hidden object-cover sm:block"
        />
        <Image
          src={imagePhotograyMobile}
          alt="Orange on blue background"
          sizes="100vw"
          fill
          className="-z-10 block object-cover sm:hidden"
        />
      </article>
    </section>
  );
}
export default Services;
