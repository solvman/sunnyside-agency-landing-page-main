import Image from "next/image";
import { testimonials, TestimonialType } from "@/data/data";

function Testimonials() {
  return (
    <section>
      <div className="mx-auto my-16 flex max-w-[1110px] flex-col items-center justify-center gap-16 text-center md:flex-row md:flex-wrap md:gap-7">
        <h2 className="font-heading text-[clamp(1rem,0.6462rem+1.5094vw,1.25rem);] font-black uppercase tracking-[5px] text-secondary-300 md:mb-12 md:basis-full">
          Client Testimonials
        </h2>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

type TestimonialCardPropsType = {
  testimonial: TestimonialType;
};

function TestimonialCard({ testimonial }: TestimonialCardPropsType) {
  const { name, title, quote, image: avatar } = testimonial;

  return (
    <article className="flex max-w-[350px] flex-col items-center gap-8">
      <Image
        width={72}
        height={72}
        src={avatar}
        alt={name}
        className="order-1 block rounded-full"
      />
      <div className="order-3">
        <h3 className="mb-2 font-heading text-lg font-black -tracking-[0.129px] text-secondary-200">
          {name}
        </h3>
        <p className="text-sm font-semibold leading-[1.78571] -tracking-[0.1px] text-secondary-300">
          {title}
        </p>
      </div>
      <p className="order-2 text-lg font-semibold leading-[1.77778] -tracking-[0.129px] text-secondary-600">
        {quote}
      </p>
    </article>
  );
}

export default Testimonials;
