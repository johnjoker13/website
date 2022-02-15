import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col gap-8 w-full" id="about">
          <h3 className="text-5xl text-slate-900 dark:text-white font-bold">
            About Me
          </h3>
          <article className="flex md:flex-row flex-col-reverse gap-6 space-x-6">
            <figure className="h-full">
              <Image
                src="/profile-photo.jpg"
                alt="joao's photo"
                width="400"
                height="400"
              />
            </figure>
            <article className="w-full">
              <article className="text-3xl mb-6 w-full text-left">
                <p>
                  I&apos;m a front end developer and a full stack development
                  student from São Paulo. My interest in programming started
                  back in 2021, when i got into{" "}
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
              <article className="flex flex-col flex-wrap space-y-4 max-w-full">
                <p className="text-2xl font-bold">
                  Here are few technologies I&apos;ve been working with
                  recently:
                </p>
                <div className="grid grid-flow-col space-x-4 font-bold text-xl">
                  <ul className="list-disc">
                    <li>Javascript (ES6+)</li>
                    <li>React JS</li>
                    <li>Redux/Context API</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Next JS</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </article>
            </article>
          </article>
        </section>
  );
}
 
export default About;