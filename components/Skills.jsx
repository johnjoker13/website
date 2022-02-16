import Link from "next/link";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { DiCss3, DiSass } from "react-icons/di";
import {
  SiRedux,
  SiNextdotjs,
  SiJavascript,
  SiJest,
  SiTestinglibrary,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="flex flex-col justify-center w-full gap-10">
        <h1 className="text-5xl text-slate-900 dark:text-white font-bold">Skills</h1>
      <section id="skills" className="grid grid-cols-4 w-3/4 gap-4 text-4xl m-auto">
        <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML"><a><AiFillHtml5 /></a></Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS"><a><DiCss3 /></a></Link>
        <Link href="https://sass-lang.com/"><a><DiSass /></a></Link>
        <Link href="https://tailwindcss.com/"><a><SiTailwindcss /></a></Link>
        <Link href="https://getbootstrap.com/"><a><SiBootstrap /></a></Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><a><SiJavascript /></a></Link>
        <Link href="https://reactjs.org/"><a><FaReact /></a></Link>
        <Link href="https://nextjs.org/"><a><SiNextdotjs /></a></Link>
        <Link href="https://redux.js.org/"><a><SiRedux /></a></Link>
        <Link href="https://jestjs.io/pt-BR/"><a><SiJest /></a></Link>
        <Link href="https://testing-library.com/"><a><SiTestinglibrary /></a></Link>
      </section>
    </section>
  );
};

export default Skills;
