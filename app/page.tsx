import {
  Navbar,
  Hero,
  About,
  Projects,
  Journey,
  Contact,
  Footer,
  Loader,
  WhyMe,
} from "@/components";

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <Navbar />
        <Hero />
        <About />
        <WhyMe />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
