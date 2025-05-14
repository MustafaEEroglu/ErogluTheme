'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
