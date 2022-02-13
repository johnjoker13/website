const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-auto max-w-screen">
      <div
        className="flex
          justify-between
          items-center
          space-x-8
          w-1/4
          pb-12
          font-Nunito"
      >
        <div className="text-lg">
          <p>João Oliveira</p>
        </div>
        <div className="flex space-x-4 text-lg font-semibold">
          <a
            href="https://github.com/johnjoker13"
            className="hover:underline
            hover:decoration-sky-600
            hover:transition
            hover:delay-75
            hover:text-black"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/joão-oliveira-14a27b1a0"
            className="hover:underline
            hover:decoration-sky-600
            hover:transition
            hover:delay-75
            hover:text-black"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
