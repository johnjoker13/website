import Image from "next/image";
import Header from "../components/Header";

const About = () => {
  return (
    <div id="about" className="pt-32">
      <section className="flex flex-col gap-6">
        <Header
          headerClass="text-5xl text-slate-900 dark:text-white font-bold"
          headerText="About"
        />
        <article className="flex md:flex-row flex-col-reverse gap-6 md:space-x-6">
          <figure className="h-full">
            <Image
              src="/profile-photo.jpg"
              alt="joao's photo"
              width="400"
              height="400"
              className="border rounded-md"
            />
          </figure>
          <article className="flex flex-wrap">
            <article className="text-2xl mb-6 w-full">
              <p>
                My interest in programming started in 2021, when I joined, {" "}
                <a
                  href="https://www.betrybe.com"
                  target="_blank"
                  className="text-sky-600"
                  rel="noreferrer"
                >
                  Trybe
                </a>
                , a programming school.I&apos;m passionate about learning new
                things, and solving challenging problems.
              </p>
              <strong>Hire me?</strong>
            </article>
          </article>
        </article>
      </section>
    </div>
  );
};

export default About;
