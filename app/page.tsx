import {
  Navbar,
  Hero,
  About,
  Projects,
  Journey,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
