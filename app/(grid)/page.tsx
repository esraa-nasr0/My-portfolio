import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <>
    <main className="flex min-h-screen gap-24 flex-col ">
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
     </main>
    </>
  );
}
