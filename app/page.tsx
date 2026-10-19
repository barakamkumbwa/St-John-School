import { Hero } from "@/components/home/Hero";
import { Welcome } from "@/components/home/Welcome";
import { Programs } from "@/components/home/Programs";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Programs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
