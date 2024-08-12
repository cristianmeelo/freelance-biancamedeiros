'use client'

import { Designer } from './components/designer';
import Footer from './components/footer';
import Header from './components/header';
import Presentation from './components/presentation';
import { Projects } from './components/projects';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-base_light">
      <Header />
      <Presentation />
      <Designer />
      <Projects />
      <Footer />
    </main>
  );
}
