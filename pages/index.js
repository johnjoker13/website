import Image from "next/image";
import Link from "next/link";
import SiteHead from "../components/SiteHead";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center pb-12">
      <SiteHead routeTitle="Homepage" />
      <main className="flex flex-row w-3/5 mt-8">
        <article className="flex flex-col space-y-4">
          <section className="text-4xl">
            <h1 className="text-slate-900 font-bold pb-6">
              Hello! I&apos;m João, a Brazilian developer based in São Paulo.
            </h1>
            <section className="flex flex-row items-center pb-6">
              <p className="text-3xl">
                I&apos;m a Full-Stack development student looking for my first
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
      </main>
    </div>
  );
}
