import Header from "@/components/Header";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Transform from "@/components/Transform";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Transform />
        <Services />
        <Testimonials />
      </main>
    </>
  );
}
