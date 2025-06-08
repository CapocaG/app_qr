import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Lista from "@/components/Formulario";

export default function Home() {
  return (
    <main>
        <Hero />
        <NewProducts />
        <Testimonial />

    </main>
  );
}
