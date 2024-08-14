import Image from "next/image";

import imageConeMobile from "@/assets/images/mobile/image-gallery-cone.jpg";
import imageConeDesktop from "@/assets/images/desktop/image-gallery-cone.jpg";
import imageMilkBottleMobile from "@/assets/images/mobile/image-gallery-milkbottles.jpg";
import imageMilkBottleDesktop from "@/assets/images/desktop/image-gallery-milkbottles.jpg";
import imageOrangeMobile from "@/assets/images/mobile/image-gallery-orange.jpg";
import imageOrangeDesktop from "@/assets/images/desktop/image-gallery-orange.jpg";
import imageSugarCubesMobile from "@/assets/images/mobile/image-gallery-sugar-cubes.jpg";
import imageSugarCubesDesktop from "@/assets/images/desktop/image-gallery-sugarcubes.jpg";

function Gallery() {
  return (
    <section>
      <h2 className="sr-only flex flex-row flex-wrap">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="relative h-[50vw] md:h-[31vw]">
          <Image
            className="hidden min-h-full min-w-full object-cover object-center sm:block"
            fill
            sizes="(min-width: 640px) 25vw, 50vw"
            src={imageMilkBottleDesktop}
            alt="Cone"
          />
          <Image
            className="block min-h-full min-w-full object-cover object-center sm:hidden"
            src={imageMilkBottleMobile}
            fill
            sizes="50vw"
            alt="Cone"
          />
        </div>
        <div className="relative h-[50vw] md:h-[31vw]">
          <Image
            className="hidden min-h-full min-w-full object-cover object-center sm:block"
            fill
            sizes="(min-width: 640px) 25vw, 50vw"
            src={imageOrangeDesktop}
            alt="Cone"
          />
          <Image
            className="block min-h-full min-w-full object-cover object-center sm:hidden"
            src={imageOrangeMobile}
            fill
            sizes="50vw"
            alt="Cone"
          />
        </div>
        <div className="relative h-[50vw] md:h-[31vw]">
          <Image
            className="hidden min-h-full min-w-full object-cover object-center sm:block"
            fill
            sizes="(min-width: 640px) 25vw, 50vw"
            src={imageConeDesktop}
            alt="Cone"
          />
          <Image
            className="block min-h-full min-w-full object-cover object-center sm:hidden"
            src={imageConeMobile}
            fill
            sizes="50vw"
            alt="Cone"
          />
        </div>
        <div className="relative h-[50vw] md:h-[31vw]">
          <Image
            className="hidden min-h-full min-w-full object-cover object-center sm:block"
            fill
            sizes="(min-width: 640px) 25vw, 50vw"
            src={imageSugarCubesDesktop}
            alt="Cone"
          />
          <Image
            className="block min-h-full min-w-full object-cover object-center sm:hidden"
            src={imageSugarCubesMobile}
            fill
            sizes="50vw"
            alt="Cone"
          />
        </div>
      </div>
    </section>
  );
}
export default Gallery;
