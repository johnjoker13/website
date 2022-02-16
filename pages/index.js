import About from "../components/About";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col m-auto w-3/5 pb-12 gap-36">
      <HomePage />
      <About />
      <Projects />
    </main>
  );
}
