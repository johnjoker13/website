const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-auto pt-36 max-w-screen">
      <div
        className="flex
          flex-wrap
          md:justify-between
          justify-center
          w-full
          md:w-3/6
          pb-12
          font-Nunito"
      >
        <div className="text-lg">
          <p className="text-slate-900 w-full dark:text-white">Built with Next.js, Tailwind CSS and &#10084;</p>
        </div>
        <div className="flex space-x-6 text-lg font-semibold">
          <a
            href="https://github.com/johnjoker13"
            className="hover:underline
            
            hover:decoration-sky-600
            hover:transition
            hover:delay-75
            hover:text-black
            hover:dark:text-white
            hover:dark:decoration-smooth-grey
            dark:text-white"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/joão-oliveira-14a27b1a0"
            className="hover:underline
            hover:decoration-sky-600
            hover:transition
            hover:delay-75
            hover:text-black
            hover:dark:text-white
            hover:dark:decoration-smooth-grey
            dark:text-white"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
