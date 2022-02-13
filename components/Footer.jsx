const Footer = () => {
  return (
    <footer className="flex fixed inset-x-0 bottom-0 justify-center w-screen">
      <div
        className="flex
          justify-between
          items-center
          space-x-8
          w-1/4
          pb-36
          font-Nunito"
      >
        <div className="text-lg">
          <p>João Oliveira</p>
        </div>
        <div className="flex space-x-4 text-lg font-semibold">
          <a href="https://github.com/johnjoker13">Github</a>
          <a href="https://www.linkedin.com/in/joão-oliveira-14a27b1a0">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
