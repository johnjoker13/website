import About from "./about";
import Contact from "./contact";
import HomePage from "./home";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <main className="flex flex-col m-auto justify-center w-4/5 pb-12 gap-20">
      <HomePage />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
