import Image from "next/image";
import Link from "next/link";
import SiteHead from "../components/SiteHead";

export default function Home() {
  return (
    <>
      <SiteHead routeTitle="Homepage" />
      <main className="flex flex-col m-auto w-3/5 pb-12 gap-36">
        <section className="flex flex-row flex-wrap mt-8">
          <article className="flex flex-col space-y-4 ">
            <section className="text-6xl">
              <h1 className="text-slate-900 dark:text-white font-bold">
                Hello! I&apos;m João, a Brazilian developer based in São Paulo.
              </h1>
              <section className="flex flex-row items-center my-6">
                <p className="text-4xl">
                  I&apos;m a Full Stack development student looking for my first
                  job.
                  <span>Hire me?</span>
                </p>
                <div className="hidden md:block">
                  <Image
                    src="/devArt.svg"
                    alt="developer coding"
                    width="350"
                    height="350"
                  />
                </div>
              </section>
            </section>

            <div
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
                  hover:bg-white
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
                  bg-white
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
            </div>
          </article>
        </section>

        <section className="flex flex-col gap-8 w-full" id="about">
          <h3 className="text-5xl text-slate-900 dark:text-white font-bold">
            About Me
          </h3>
          <article className="md:flex-row flex flex-col-reverse gap-6 md:space-x-8">
            <figure>
              <Image
                className="md:rounded-full"
                src="/profile-photo.jpg"
                alt="joao's photo"
                width="600"
                height="600"
              />
            </figure>
            <article>
              <article className="text-3xl mb-6">
                <p>
                  I&apos;m João Oliveira a front end developer and a full stack
                  development student based in São Paulo.
                </p>
                <p>
                  My interest in programming started back in 2021, when i got
                  into{" "}
                  <a
                    href="https://www.betrybe.com"
                    target="_blank"
                    className="text-sky-600"
                    rel="noreferrer"
                  >
                    Trybe
                  </a>
                  , a programming school.
                </p>
                <p>
                  I&apos;m passionate about learning new things, and solving
                  challenging problems.
                </p>
              </article>
              <article className="flex flex-col flex-wrap space-y-4 max-w-full">
                <p className="text-2xl font-bold">
                  Here are few technologies I&apos;ve been working with
                  recently:
                </p>
                <div className="grid grid-flow-col space-x-4 font-bold text-xl">
                  <ul className="list-disc">
                    <li>Javascript (ES6+)</li>
                    <li>React JS</li>
                    <li>Redux/Context</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Next JS</li>
                    <li>Tailwind</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </article>
            </article>
          </article>
        </section>
      </main>
    </>
  );
}
