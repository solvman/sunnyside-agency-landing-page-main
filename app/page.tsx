import Header from "@/components/Header";
import Transform from "@/components/Transform";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Transform />
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
