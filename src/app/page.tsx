"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import {
  CardHero,
  Faq,
  Footer,
  Testimonials,
  About,
  Projects,
  Results,
  Header,
  Partners,
  CompareSection,
  Presentation,
} from "@/app/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white">
      <Header />
      <Presentation />
      <CompareSection />
      <Partners />
      <Results />
      <Projects />
      <About />
      <Testimonials />
      <CardHero />
      <Faq />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="+5551994600686"
        accountName="Escritório Bianca Medeiros"
        avatar="/images/avatar.jpg"
        chatMessage="Olá! Como posso te ajudar hoje?"
        statusMessage="Geralmente responde em minutos"
      />
    </main>
  );
}
