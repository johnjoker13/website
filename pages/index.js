import About from "../components/About";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col m-auto justify-center w-4/5 pb-12 gap-36">
      <HomePage />
      <About />
      <Projects />
    </main>
  );
}
