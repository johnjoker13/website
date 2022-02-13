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
          <p>Github</p>
          <p>Linkedin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
