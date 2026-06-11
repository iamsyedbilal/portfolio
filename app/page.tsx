import {
  Navbar,
  Hero,
  About,
  Projects,
  Journey,
  Contact,
  Footer,
  Loader,
} from "@/components";

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
