import Image from "next/image";
import Link from "next/link";
import SiteHead from "../components/SiteHead";

const HomePage = () => {
  return (
    <>
    <SiteHead routeTitle="Portfolio" />
    <section className="flex flex-row flex-wrap justify-center pt-36">
      <section className="flex flex-col">
        <article className="text-6xl">
          <h1 className="text-slate-900 dark:text-white font-bold">
            Hello! I&apos;m João, a Brazilian developer from São Paulo.
          </h1>
          <article className="flex flex-row items-center">
            <p className="text-4xl text-slate-700 dark:text-light-grey" >
              I&apos;m a Front End developer and Full Stack development student looking for my first
              job.
            </p>
            <div className="hidden md:block">
              <Image
                src="/devArt.svg"
                alt="developer coding"
                width="350"
                height="350"
              />
            </div>
          </article>
        </article>

        <section
          className="
        flex
        flex-wrap
        md:space-x-6
        w-6/12
        mt-6
        items-center
        gap-6
        justify-between
        text-center
      "
        >
          <Link href="https://www.github.com/johnjoker13">
            <a
              className="
            flex-1
            border
            rounded-md
            bg-slate-900
            text-white
            p-3
            font-bold
            hover:bg-smooth-grey
            hover:text-slate-900
            hover:border-smooth-grey
            hover:transition
            hover:delay-100
          "
            >
              Github
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/joão-oliveira-14a27b1a0">
            <a
              className="
            flex-1
            border
            border-smooth-grey
            rounded-md
            bg-smooth-grey
            text-slate-900
            font-bold
            p-3
            hover:bg-slate-900
            hover:text-white
            hover:transition
            hover:delay-100
          "
            >
              Linkedin
            </a>
          </Link>
        </section>
      </section>
    </section>
    </>
  );
};

export default HomePage;
