import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col gap-6" id="about">
      <header>
        <h3 className="text-5xl text-slate-900 dark:text-white font-bold">
          About Me
        </h3>
      </header>
      <article className="flex md:flex-row flex-col-reverse gap-6 md:space-x-6">
        <figure className="h-full">
          <Image
            src="/profile-photo.jpg"
            alt="joao's photo"
            width="400"
            height="400"
          />
        </figure>
        <article className="flex flex-wrap">
          <article className="text-3xl mb-6 w-full tracking-tight">
            <p>
              I&apos;m a front end developer and a full stack development
              student from São Paulo. My interest in programming started back in
              2021, when i got into{" "}
              <a
                href="https://www.betrybe.com"
                target="_blank"
                className="text-sky-600"
                rel="noreferrer"
              >
                Trybe
              </a>
              , a programming school. I&apos;m passionate about learning new
              things, and solving challenging problems.
            </p>
            <p className="font-bold">Hire me?</p>
          </article>
        </article>
      </article>
    </section>
  );
};

export default About;
