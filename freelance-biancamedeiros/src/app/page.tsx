'use client'

import  {Header}  from './components/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 bg-base_light">
      <Header />
    </main>
  );
}
