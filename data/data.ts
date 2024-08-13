import avatarEmily from "@/assets/images/image-emily.jpg";
import avatarJennie from "@/assets/images/image-jennie.jpg";
import avatarThomas from "@/assets/images/image-thomas.jpg";
import { StaticImageData } from "next/image";

export type TestimonialType = {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string | StaticImageData;
};

export const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    title: "Marketing Director",
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    image: avatarEmily,
  },
  {
    id: 2,
    name: "Thomas S.",
    title: "Chief Operating Officer",
    quote:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    image: avatarThomas,
  },
  {
    id: 3,
    name: "Jennie F.",
    title: "Business Owner",
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    image: avatarJennie,
  },
];
