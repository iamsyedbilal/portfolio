import { Navbar, Hero, About, WhyMe, Projects, Journey, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyMe />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
