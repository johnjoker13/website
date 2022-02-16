import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="w-full space-y-10">
      <h3 className="text-5xl text-slate-900 dark:text-white font-bold">
        Projects
      </h3>
      <article className="w-full">
        <div
          className="max-w-sm
         bg-white
          rounded-lg
          border
          border-gray-200
          shadow-md
          dark:bg-gray-800
          dark:border-gray-700
          "
        >
          <Image
            className="relative"
            src="/trybe-wallet.png"
            alt="projeto trybe-wallet"
            width="100%"
            height="40%"
            layout="responsive"
            objectFit="contain"
          />
          <div className="break-words p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Project TrybeWallet
            </h5>

            <p className="mb-3 font-normal text-slate-900 dark:text-smooth-grey">
              TrybeWallet is a simple expense control App built with React +
              Redux that performs a CRUD on a list of expenses.
            </p>
            <a
              href="https://github.com/johnjoker13/TrybeWallet"
              target="_blank"
              rel="noreferrer"
              className="
              inline-flex 
              items-center 
              py-2 px-3 text-sm f
              ont-medium text-center
              bg-slate-900
              text-white
              rounded-lg
              hover:bg-smooth-grey
              hover:text-slate-900
              font-bold"
            >
              Repository
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
