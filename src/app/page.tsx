"use client";

import {
  Gallery,
  Footer,
  Testimonials,
  Projects,
  Curtains,
  Header,
  Consulting,
  Presentation,
} from "@/app/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white font-glacial">
      <Header />
      <section id="presentation">
        <Presentation />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="consulting">
        <Consulting />
      </section>
      <section id="curtains">
        <Curtains />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
